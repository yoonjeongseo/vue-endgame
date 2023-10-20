import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('id는 이메일 형식이어야 한다', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningTxt = wrapper.find('.warning');
    expect(warningTxt.exists()).toBeTruthy();
  });

  test('아이디와 패스워드가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {});
});
