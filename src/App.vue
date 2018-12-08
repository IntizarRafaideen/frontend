<template>
  <div id="app">
    <h1 id="mainheading">Library Management System</h1>
    
   <nav>
     
        <router-link to="/"><v-btn color="#00ffa9">Add Item</v-btn></router-link>
        <router-link to="/about"><v-btn color="#00ffa9">Remove Item</v-btn></router-link>
        <router-link to="/display"><v-btn color="#00ffa9">Display the List</v-btn></router-link>
        <router-link to="/borrow"><v-btn color="#00ffa9">Borrow Item</v-btn></router-link>
        <router-link to="/return"><v-btn color="#00ffa9">Return Item</v-btn></router-link>
        <router-link to="/report"><v-btn color="#00ffa9">Generate Report</v-btn></router-link>
        <router-link to="/member"><v-btn color="#00ffa9">Member</v-btn></router-link>
      </nav>
    <router-view/>
  </div>
</template>

<script>
import Library from './components/Library.vue'
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'app',
  components: {
    Library
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

#mainheading{
  color: rgb(255, 255, 255);

}
body {
  background-color: #252526;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 95%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #252526;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
