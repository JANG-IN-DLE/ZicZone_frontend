import axios from 'axios';
import config from '../../config';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: config.baseURL
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `${token}`; // 토큰이 있을 경우 Authorization 헤더 추가
    }
    return config; // 변경된 설정 반환
  },
  function (error) {
    return Promise.reject(error); // 오류 발생 시 거부
  }
);

export default api;