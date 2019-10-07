<template>
  <section id="login">
    <form @submit.prevent="handleSubmit">
      <img src="@/assets/images/logo.svg" alt="Tindev" />
      <input type="text" placeholder="Digite o seu usuário no github" v-model="username" />
      <input class="btn" type="submit" value="Entrar" />
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    username: null
  }),
  methods: {
    handleSubmit() {
      console.log("teste submit");
    }
  }
};
</script>

<style scoped>
#login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
}

#login input {
  margin-top: 20px;
}
</style>