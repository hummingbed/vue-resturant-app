<template>
  <!-- <SignUp />   -->
  <router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    // SignUp
  },
 mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      console.log("exist");
      this.$router.push({ name: "Login" });
    } else {
      console.log("dont exist");
    }
    console.log("response");
  },
	
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
