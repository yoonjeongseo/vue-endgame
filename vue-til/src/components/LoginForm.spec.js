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
});
