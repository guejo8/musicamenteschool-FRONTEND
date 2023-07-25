<template>
  <NavBar />

  <div class="div_flex">
    <div class="card_div">
      <div class="cards" v-for="documento in lessons" :key="documento.id">
        <h2>{{ documento.titulo }}</h2>
        <p>Categoría: {{ documento.categoria }}</p>
        <p class="short-text">{{ documento.texto }}</p>
        <input class="read_more_button" type="checkbox">
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

let lessons = ref([])

onMounted(() => {
  getAllLessons()
})

async function getAllLessons() {
  const url = 'http://127.0.0.1:5000/api/data';

  try {
    let response = await axios.get(url)
    lessons.value = response.data
  } catch (error) {
    console.log(error)
  }
}

</script>


<style scoped>

.div_flex {
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  background-image: url("../assets/images/background_musicamente4.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
}




.card_div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
  
}
.cards {
  background-color: #f5f5f5;
  text-align: center;
  width: 60vw;
  margin-bottom: 3.5rem;
  font-size: 1.2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4rem;
}

h2 {
  font-size: 2.2rem;
  margin-top: 2.5rem;
}
.short-text {
  --max-lines: 5;
  --line-height: 1.4;
  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  line-height: var(--line-height);
  overflow: hidden;
  position: relative;
}

.short-text:has(+ .read_more_button:not(:checked))::before {
  content: "";
  position: absolute;
  height:  calc(1em * var(--line-height));
  width: 100%;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, #f5f5f5);
}

.read_more_button {
  appearance: none;
  background-color:#ef4b7f;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.8rem;
  align-self: center;
  cursor: pointer;
  margin-bottom: 2rem;
}

.read_more_button:hover {
  background-color: #CCC;
}

.read_more_button::before {
  content: "Leer más";
}

.read_more_button:checked::before {
  content:"Leer menos";
}

.short-text:has(+ .read_more_button:checked) {
  max-height: none;
}

</style>