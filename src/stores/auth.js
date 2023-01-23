import { defineStore } from 'pinia';
import api from '../services/index';
import jwt from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
  }),
  actions: {
    async login(user) {
      await api
        .post('/auth', { user })
        .then((res) => {
          const token = res.data.token;
          const loggedUser = jwt(token);
          localStorage.setItem('token', token);
          api.defaults.headers.Authorization = `Bearer ${token}`;
          this.username = loggedUser.dataValues;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    recoveryToken() {
      const recoveredToken = localStorage.getItem('token');
      if (recoveredToken) {
        const recoveredUser = jwt(recoveredToken);
        api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
        this.username = recoveredUser.dataValues;
      }
    },
    logout() {
      localStorage.removeItem('token');
      api.defaults.headers.Authorization = null;
      this.username = '';
    },
  },
});
