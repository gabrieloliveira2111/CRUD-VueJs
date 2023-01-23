<template>
  <section
    class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-login"
  >
    <div class="d-flex bg-white shadow-sm rounded login-container">
      <div class="col-12 col-lg-6 mt-5">
        <form
          class="align-items-center d-flex flex-column w-100 p-3"
          @submit.prevent="auth"
        >
          <div class="content-logo">
            <img
              class="logo-login img-fluid"
              src="@/assets/images.jpg"
              alt="Logo"
            />
          </div>
          <input
            class="login-input mb-5 mt-4 w-75 p-2"
            maxlength="50"
            type="text"
            id="user"
            name="user"
            autoComplete="username"
            placeholder="Usuário"
            v-model="user"
            required
          />
          <button class="btn-login mt-4 w-75" type="submit">Log In</button>
        </form>
      </div>
      <figure class="logo-container col-lg-6">
        <img src="../assets/login.svg" alt="foto de sessão de massagem" />
      </figure>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth';

const { logout, login } = useAuthStore();

export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      user: '',
    };
  },
  methods: {
    async auth() {
      try {
        await login(this.user);
        this.$router.push({ name: 'home' });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    logout();
  },
});
</script>

<style>
.bg-login {
  background: #7d61e7;
}
.login-container {
  height: 55%;
  min-height: 480px;
  max-width: 960px;
  width: 75%;
  @media (min-width: 992px) {
    width: 100%;
  }
}
.logo-login {
  max-height: 100px;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (max-width: 992px) {
    display: none;
    border: none;
  }
}
.login-title {
  font-size: 2.5rem;
  font-weight: bold;
}
.login-input {
  border: none;
  border-bottom: 2px solid #c4c4c4;
  outline: none;
}
.login-input:focus {
  border-color: #7d61e7;
}

.login-input:focus::placeholder {
  color: transparent;
}
.login-input:hover::placeholder {
  padding-left: 10px;
  transition: 0.4s;
}
.login-input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
  box-shadow: 0 0 0 30px white inset;
}

.MuiSvgIcon-root {
  color: white;
}

.content-logo {
  margin: 16px 0 56px;
}

.btn-login {
  background-color: #7d61e7;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  padding: 8px 0;
  border-radius: 8px;
  transition: all 0.3s;
}
.btn-login:hover {
  background: #5a36dd;
}
</style>
