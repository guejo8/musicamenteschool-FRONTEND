<template>
<nav>
  <input type="checkbox" id="check">
  <label for="check" class="burger">
    <img src="../assets/images/responsive-menu.png" alt="desplegable responsive">

  </label>
  <ul>
    <div class="left_menu">
      <router-link id="logo_hover" to="/"><img class="img_logo" src="../assets/images/logo.png" alt="Musicamente school logo"></router-link>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Conócenos</router-link></li>
    </div>
    <div class="lecciones">
      <li><router-link to="/courses">Lecciones disponibles</router-link></li>
      <span>|</span>
    </div>
  </ul>
</nav>


</template>

<script setup>

</script>


<style scoped>
.img_logo {
  height: 5rem;
  margin-left: 1.5rem;
}

#logo_hover:hover:after {
  background: #ffffff;
}

ul{	
	margin-top: 2.5rem;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.left_menu {
  display: flex;
  justify-content: start;
  align-items: center;
  
} 

li {
  margin: 0 .625rem;
  font-size: 1.3rem;
}

a {
display: inline-block;
position: relative;
color: inherit;
text-decoration: none;
}
a:after {
content: "";
display: block;
margin: auto;
height: 0.125rem;
width: 0px;
transition: all .5s;
}

a:hover:after {
width: 100%;
background: #e56210d4;
}

.lecciones {
  display: flex;
  justify-content: end;
  margin-right: 4rem;
  margin-top: 1.5rem;  
} 

.burger {
  display: none;
  padding: 2rem;
  cursor: pointer;
}

.burger img {
  width: 3rem;
  height: 2.5rem;
}

#check {
  display: none;
}

@media (max-width: 850px) {

.img_logo {
  display: none;
}  
.burger {
  display: block;
  position: relative;
  z-index: 2;
}

ul {
  position: fixed;
  width: 60%;
  height: 100vh;
  background: #ffffff; 
 
  top: 0;
  left: -100%;
  transition: all .5s;
  z-index: 1;
  display: block;
}

.left_menu {

  display: block;
  margin: 3.125rem 0;
  line-height: 2.875rem;
}


#check:checked ~ ul {
  left: 0;
}
}

</style>