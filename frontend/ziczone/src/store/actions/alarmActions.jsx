import axios from 'axios';
import config from '../../config';


export const setAlarms = (alarms) => ({
  type: 'SET_ALARMS',
  payload: alarms
});

export const addAlarm = (alarm) => ({
  type: 'ADD_ALARM',
  payload: alarm
});

export const deleteAlarm = () => ({
  type: 'DELETE_ALARM'
});

export const setUnread = (unread) => ({
  type: 'SET_UNREAD',
  payload: unread
});

export const readAlarm = () => ({
  type: 'READ_ALARM'
});

const api = axios.create({
  baseURL: config.baseURL
});

//읽음처리
export const readAllAlarms = (userId, token, unread) => async (dispatch) => {
  if(unread){
    try {
      await api.post(`/sse/readAlarm/${userId}`, {}, {
        headers: {
          Authorization: token,
        },
      });
  
      dispatch(readAlarm());
    } catch (error) {
      console.error("Failed to mark alarms as read:", error);
    }
  }
  
};

export const initAlarm = (userId, token) => async (dispatch, getState) => {
  try {
    const response = await api.get(`/sse/initAlarm/${userId}`, {
      headers: {
        Authorization: token,
      },
    });

    const reversedData = response.data.slice().reverse(); // 최신알람이 위로 오도록
    const hasUnread = reversedData.some(alarm => !alarm.readOrNot);

    dispatch(setUnread(hasUnread));
    dispatch(setAlarms(reversedData));

  } catch (error) {
    console.error("Failed to fetch initial alarms:", error);
  }
};

export const subscribeToSSE = (userId, token) => (dispatch) => {
    //localhost안적어주면 알림안옴이슈
  const eventSource = new EventSource(`http://localhost:12000/sse/subscribe/${userId}?token=${token}`);

  eventSource.addEventListener("alarm", function (e) {
    const alarm = JSON.parse(e.data);
    dispatch(addAlarm(alarm));
  });

  eventSource.onerror = function () {
    console.error("Error in SSE connection");
    eventSource.close();
  };
};