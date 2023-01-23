<template>
  <header
    className="header bg-white shadow-sm mb-1 d-flex align-items-center justify-content-between p-5"
  >
    <img className="logo-header" src="" />
    <div className="user-container">
      <span className="m-2 purple-color-text">{{ username }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-person purple-color-text"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        />
      </svg>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Header',
  setup() {
    const { username } = useAuthStore();
    return {
      username,
    };
  },
});
</script>

<style scoped>
.header {
  height: 10vh;
  margin: 0;
  justify-content: space-between;
  @media (max-width: 400px) {
    justify-content: space-around;
  }
}
.buttonLogout:hover {
  cursor: pointer;
}
.menu {
  margin-left: -2.5%;
}
.logo-header {
  width: 100px;
  @media (max-width: 400px) {
    display: none;
  }
}
</style>
