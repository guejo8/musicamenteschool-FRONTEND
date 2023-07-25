<template>
 <NavBar />

 <div class="parent_div">
  <div class="home_title">
    <h1 >Musicamente</h1>
  </div>
  <div class="child_div">
      <p class="home_parraf">Bienvenido a Musicamente school, donde la música y la mente se abrazan en un dulce vals de descubrimiento. Te acompañamos desde tus primeros pasos en este viaje.</p> 
      <p id="invite" class="home_parraf">Adéntrate en el delicado susurro del clarinete, siente la calidez del ukelele y desvela los secretos de la teoría musical.<br/> Adelante!</p> 
  </div>
  </div>
 <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.parent_div {
  width: 90vw;
  height: 85vh;
  background-image: url("../assets/images/background_musicamente.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0 auto;
}
.child_div {
  width: 50vw;
  height: auto;
  background-color: #FFFFFF80;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .8rem;
}

.home_title {
  color:#ef4b7f;
  font-size: 3rem; 
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home_parraf {
  text-align: center;
  font-size: 1.7rem;
  margin-top: 0.8rem;
}

#invite {
  margin-top: 2rem;
}



@media (max-width: 850px) {

  .parent_div {
  height: 100vh;
  background-image: url("../assets/images/background_musicamente6.jpg");
  background-size: cover;
  
}

  .home_title {
  font-size: 2rem; 
  margin-top: -2rem;
}
.home_parraf {
  font-size: 1.3rem;
}
}
</style>