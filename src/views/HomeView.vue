<template>
  <main class="clients-container">
    <Header />
    <div class="container">
      <h1 class="text-center pt-5 mb-5 text-white">Meus Clientes</h1>
      <div class="d-flex justify-content-center w-100">
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          class="input-search w-75 p-3 mb-5"
        />
      </div>
      <h2 class="text-center text-white mt-5 pt-5">
        Nenhum Resultado Encontrado
      </h2>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
  },
});
</script>
<style>
.clients-container {
  min-height: 100vh;
  background-color: #7d61e7;
}

.input-search {
  outline: none;
  border: none;
  border-radius: 20px;
  color: #7d61e7;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
}

.input-search::placeholder {
  color: #7d61e7;
}
.input-search:focus::placeholder {
  color: transparent;
  transition: 0.3s;
}
</style>
