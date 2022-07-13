<template>
    <HeaderComponent />
    <h1>HomeComponent</h1>
    <div v-for="name in userName" :key="name" >
          {{name.name}}
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
export default {
    userName: 'HomeComponent',
    components: {
        HeaderComponent
    },
    data(){
        return {
            userName: ''
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        this.userName = JSON.parse(user);
    }
}
</script>
