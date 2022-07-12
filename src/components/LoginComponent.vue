<template>
  <h1>LoginComponent</h1>
  <form>
    <label for="lname">Email</label>
    <input
      type="text"
      v-model="email"
      id="email"
      name="email"
      placeholder="Your email..."
    />

    <label for="lname">password </label>
    <input
      type="text"
      v-model="password"
      id="password"
      name="password"
      placeholder="Your password..."
    />

    <input type="submit" v-on:click="login" value="Login" />
  </form>
  <p>
    <router-link to="/signUp">Register</router-link>
  </p>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginComponent",
  data(){
    return{
        email: '',
        password: ''
    }
  },
  methods: {
    login(e){
        e.preventDefault();
        let url = `http://localhost:3000/user?email=${this.email}&password=${this.password}`;
        axios.get(url)
        .then((response) => {
          console.log(response );
          if (response.data[0].email == this.email && response.data[0].password) {
            console.log("response succsss");
            localStorage.setItem("user-info", JSON.stringify(response.data));
            this.$router.push({ name: "Home" });
            return response;
          }
        })
         .catch((error) => {
          error.message;
          console.error("There was an error!", error);
        });
        
    }
  },
  mounted(){
     console.log('response')
  }
};
</script>



<style scoped>
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>