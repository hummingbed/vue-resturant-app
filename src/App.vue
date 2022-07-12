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
  // beforeMount(){
	// 	console.log("dont exist");
	// },
    // mounted() {
    //     //  let user = localStorage.getItem("user-info");
    //     // if (user) {
    //     //   console.log("exist");
    //     //   this.$router.push({ name: "Home" });
    //     // } else {
    //     //   console.log("dont exist");
    //     // }
    // },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
