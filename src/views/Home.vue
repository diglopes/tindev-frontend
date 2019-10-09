<template>
  <section id="home">
    <MatchModal />

    <router-link to="/">
      <img src="@/assets/images/logo.svg" alt="Tindev" />
    </router-link>

    <ul>
      <UserCard />
      <UserCard />
      <UserCard />
    </ul>

    <div class="empty">Acabou! :(</div>
  </section>
</template>


<script>
import UserCard from "@/components/UserCard";
import MatchModal from "@/components/MatchModal";

export default {
  name: "home",
  components: {
    UserCard,
    MatchModal
  }
};
</script>

<style scoped>
#home {
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
}

#home ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
}

#home .empty {
  font-size: 32px;
  color: #666;
  margin-top: 6rem;
  font-weight: bold;
}
</style>