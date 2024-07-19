import { useEffect, useState } from "react";
import bell from "../assets/Bell.png";
import reddot from "../assets/reddot.png";
import "./../styles/Alarm.css";
import axios from "axios";


const AlarmList = () => {
    const [alarmOpen, setAlarmOpen] = useState(false)
    const [unread, setUnread] = useState(false); //새로운 알림왔을때 true
    const [alarms, setAlarms] = useState([]);


    // 알림리스트/안읽은알림유무
    const toggleAlarm = () => {
        setAlarmOpen(!alarmOpen);
        if (alarmOpen) {
            setUnread(false); // 알림 목록을 열었을 때 읽음으로 표시
        }
    };

    // 알림 드롭다운 닫기
    const handleClickOutside = (event) => {
        if (!event.target.closest(".user_login_alarm") && alarmOpen) {
            setAlarmOpen(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [alarmOpen]);


    //알림구독하고 알림을 감지함
    const subscribeToSSE = async (userId, token) => {
        const eventSource = new EventSource(`http://localhost:12000/sse/subscribe/${userId}?token=${token}`);

        eventSource.addEventListener("alarm", function (e) {
            const alarm = JSON.parse(e.data);
            setAlarms(prevAlarms => [alarm, ...prevAlarms]);
            setUnread(true);
        });

        eventSource.onerror = function () {
            console.error("Error in SSE connection");
            eventSource.close();
        };
    }

    
    //초기알람설정
    const initAlarm = async (userId, token) => {
        try {
            const response = await axios.get(`/sse/initAlarm/${userId}`, {
                headers: {
                    Authorization: token,
                },
            });
            const reversedData = response.data.slice().reverse();//최신알람이 위로 오도록
            setAlarms(reversedData);
        } catch (error) {
            console.error("Failed to fetch initial alarms:", error);
        }
    };
    


    //로그인상태일때 구독요청
    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const userRole = localStorage.getItem('userRole')
        if(token && userId && userRole === 'PERSONAL'){
            subscribeToSSE(userId, token); //알림구독
            initAlarm(userId, token); //이전알림가져옴
        }
    }, []) //빈배열로 한번만 실행


    //알림타입에 따른 텍스트설정
    const AlarmMessage = (alarm) => {
        //sender(게시글제목)이 10글자 이상인 경우 말줄임표
        const sliceSender = (alarmSender) => {
            if (alarmSender.length > 10) {
                return alarmSender.slice(0, 10) + '···';
            }
            return alarmSender;
        }
        // 알림타입 구분 
        switch (alarm.type) {
            case "SELECTION":
                return `[${sliceSender(alarm.sender)}] 게시글에 채택되셨습니다.`;
            case "COMMENT":
                return `[${sliceSender(alarm.sender)}] 게시글에 댓글이 달렸습니다.`;
            case "PICK":
                return `[${sliceSender(alarm.sender)}] 기업이 당신을 pick했습니다.`;
            case "SCRAP":
                return `[${sliceSender(alarm.sender)}] 기업이 당신을 scrap했습니다.`;
            case "BUYRESUME":
                return `[${sliceSender(alarm.sender)}]님이 당신의 이력서를 열람하셨습니다.`;
            default:
                return `알림 메시지를 불러오지 못했습니다.`;
            }
    };


    //날짜형식 포맷
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div className="user_login_alarm">
          <img 
            className="user_login_alarm_bellimg" 
            src={bell} 
            alt="Alarm"
            onClick={toggleAlarm}
            style={{cursor: 'pointer'}}
             />
          <img 
            className="user_login_alarm_dotimg" 
            src={reddot} 
            alt="reddot"
            style={{ display: unread ? 'block' : 'none' }} />

          {/* 알림 드롭다운 */}
          <div 
            className="dropdown_alarmlist" 
            style={{ display: alarmOpen ? 'block' : 'none' }}>
            {alarms.map((alarm, index) => (
                <div key={index} className="alarm_content">
                    <p className="alarm_content_detail">{AlarmMessage(alarm)}</p>
                    <div className="alarm_content_right">
                        <p className="alarm_content_berry">{alarm.getBerry === undefined ? '' : `+${alarm.getBerry}🫐`}</p>
                        <p className="alarm_content_time">{formatDate(alarm.alarmCreate)}</p>
                    </div>
                </div>
            ))}
            
          </div>
        </div>
    )
}

export default AlarmList;
