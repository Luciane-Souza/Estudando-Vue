<template>
  <nav class="nav flex-column justify-content-between">
    <div>
      <router-link
        exact
        :key="i"
        exact-active-class="active"
        class="nav-link"
        :to="{ name: router.name }"
        v-for="(router, i) in routerLinks"
      >
        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
        {{ router.meta.title }}
      </router-link>

      <hr>
      <layout-new-expense/>
    </div>

    <layout-logout />
    <!--a class="nav-link active" href="#">Ativo</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#">Desativado</a-->
  </nav>
</template>

<script>
import LayoutLogout from "./LayoutLogout";
import LayoutNewExpense from "./LayoutNewExpense";

export default {
  components: {
    LayoutLogout,
    LayoutNewExpense
  },
  computed: {
    routerLinks() {
      return this.$router.options.routes.filter(r => r.name != "login");
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  margin-left: -15px;
  width: calc(100% + 30px);
  height: calc(100vh - 50px);
  .nav-link {
    color: var(--white);
    transition: 0.4s;
    &.active {
      color: var(--featured);
      background-color: transparent;
    }
    &:hover {
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>
