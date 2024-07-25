import { useEffect, useState } from "react";
import bell from "../assets/Bell.png";
import reddot from "../assets/reddot.png";
import "./../styles/Alarm.css";
import { useSelector, useDispatch } from 'react-redux';
import { readAllAlarms, toggleAlarm } from "../../../store/actions/alarmActions";


const AlarmList = () => {
    const dispatch = useDispatch();
    const alarms = useSelector(state => state.alarm.alarms);
    const unread = useSelector(state => state.alarm.unread);
    const [alarmOpen, setAlarmOpen] = useState(false);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
  

    // 알림리스트/안읽은알림유무
    const handleToggleAlarm = () => {
        setAlarmOpen(!alarmOpen);
        if (alarmOpen) {
          dispatch(readAllAlarms(userId, token, unread));
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
            case "DELETEBOARD":
                return `[${sliceSender(alarm.sender)}]게시물이 자동 삭제되었습니다.`;
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
            onClick={handleToggleAlarm}
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
                <div 
                    key={index} 
                    className="alarm_content" 
                    style={{ backgroundColor: !alarm.readOrNot ? 'white' : '#f0f0f0' }}
                >
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
