<template>
  <li id="user">
    <img src="https://avatars1.githubusercontent.com/u/38112167?s=460&v=4" alt="Imagem do usuario" />
    <footer>
      <strong>Diego Lopes</strong>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolorum debitis culpa assumenda laboriosam ab eveniet totam a rerum molestiae.</p>
    </footer>
    <div class="actions">
      <button>
        <img src="@/assets/images/like.svg" alt="Like" />
      </button>

      <button>
        <img src="@/assets/images/dislike.svg" alt="Dislike" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "user-card"
};
</script>

<style scoped>
#user {
  display: flex;
  flex-direction: column;
}

#user img {
  border-radius: 5px 5px 0 0;
}

#user footer {
  background: #fff;
  padding: 15px 20px;
  border: 1px solid #ddd;
  text-align: left;
  border-radius: 0 0 5px 5px;
}

#user strong {
  color: #333;
  font-size: 16px;
}

#user p {
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin-top: 5px;
}

#user .actions {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

#user .actions button {
  height: 48px;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease;
}

#user .actions button:hover {
  transform: translate3d(0, -2px, 0);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
}

#user .actions button:hover img {
  transform: rotate(15deg) scale(1.2);
  transition: all 0.4s;
}

#user .actions button:active {
  transform: translate3d(0, 1px, 0);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
}
</style>