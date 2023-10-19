import axios from 'axios';
// import store from '@/store/index';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

//엑시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });
  return setInterceptors(instance);
}

export const instance = createInstance(); //회원 가입관련 인스턴스
export const posts = createInstanceWithAuth('posts'); //노트 관련 인스턴스
