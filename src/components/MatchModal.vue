<template>
  <div id="match-modal">
    <img src="@/assets/images/itsamatch.png" alt="Match" />
    <img
      src="https://avatars1.githubusercontent.com/u/38112167?s=460&v=4"
      alt="Fulano"
      class="avatar"
    />
    <strong class="username">Nome do usuario</strong>
    <p
      class="bio"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate quod dolorum.</p>

    <button class="button">Fechar</button>
  </div>
</template>

<script>
export default {
  name: "match-modal"
};
</script>

<style scoped>
#match-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
}

#match-modal .avatar {
  width: 200px;
  width: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
}

#match-modal .username {
  font-size: 32px;
  color: #fff;
}

#match-modal .bio {
  margin-top: 10px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;
  line-height: 30px;
}

#match-modal .button {
  background: none;
  border: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
}

#match-modal .button:hover {
  border-bottom: 1px solid #fff;
}
</style>