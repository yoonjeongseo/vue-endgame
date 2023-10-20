import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운트되면 username이 존재하고 초기 값으로 설정되어 있어야 한다', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com',
        };
      },
    });
    // expect(wrapper.vm.username).toBe('');
    const idInput = wrapper.find('#username');
    console.log('input', idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
