 <template>
  <NavBar />
  <!--se accede a esta seccion escribiendo en la barra de navegacion http://localhost:5173/write -->
  <div class="big_div">
    <div class="create_new">
        <form @submit.prevent>         
          <input type="text" id="titulo" v-model="title" placeholder="Título">
          <input type="text" id="categoria" v-model="category" placeholder="Categoria">
          <input type="text" id="id" v-model="id" placeholder="ID">
          <textarea id="texto" v-model="text" placeholder="Introducir nueva leccion"></textarea>
        <div class="btn-padding">
          <button @click="createLesson">Enviar</button>
          <button @click="readLesson">Leer</button>
          <button @click="editLesson(id)">Editar</button>
          <button @click="deleteLesson(id)">Eliminar</button>
        </div>
        </form>
      </div>
  </div>


</template>

<script setup>
import NavBar from '../components/NavBar.vue'

import {ref} from "vue"
import axios from "axios"



let title = ref("")
let category = ref("")
let text = ref("")
let id = ref("")

const url = 'http://127.0.0.1:5000/api/data';

//crear leccion - comprobado,funciona
async function createLesson() {
  try {
    await axios.post(url, {
      titulo: title.value,
      categoria: category.value,
      texto: text.value
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
//borrar leccion - comprobado,funciona
async function deleteLesson() {
  try {
    await axios.delete(`${url}/${id.value}`);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

//editar leccion - comprobado,funciona
async function editLesson() {
  try {
    await axios.put(`${url}/${id.value}`, {
      titulo: title.value,
      categoria: category.value,
      texto: text.value
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

// Obtener leccion por id - comprobado, todo funciona. 
// principalmente lo uso para editar texto, primero se captura mediante leer, se hacen los
//cambios y se guardan mediante editar.
async function readLesson() {
  try {
    const response = await axios.get(`${url}/${id.value}`);
    const lessonData = response.data;
    title.value = lessonData.titulo;
    category.value = lessonData.categoria;
    text.value = lessonData.texto;
  } catch (error) {
    console.log(error);
  }
}


</script>

<style scoped>
.big_div {
  width: 90vw;
  height: 85vh;
  background-image: url("../assets/images/background_musicamente.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0 auto;
}

.create_new {
  width: 55%;
  height: 90%;
  background-color: #FFFFFF80;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

form {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  background-color: #F4F4F4;
  height: 6vh;
  width: 40vw; 
  margin-top: 2rem;
  border: none;
  text-align: center;
  font-size: 2rem;
  font-family: 'Lobster', cursive;
}

textarea {
  background-color: #F4F4F4;
  height: 40vh;
  width: 35vw; 
  margin-top: 3.5rem;
  border: none;
  resize: none;
  text-align: justify;
  padding: 2rem;
}

input::placeholder {
    font-size: 1.7rem;
    font-family: 'Lobster', cursive;
    color:#ff914d;
}

::placeholder {
  font-size: 1.5rem;
  padding-left: 0.5rem;
}

button {
  background-color: #ff914d;
  padding: 0.5rem 0.8rem; 
  margin: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.8rem;
 }

 .btn-padding {
  padding: 2rem;
 }

 @media (max-width: 850px) {
  .create_new {
  width: 95%;
  height: 95%;
}
input {
  width: 80vw; 
}

textarea {
  width: 65vw; 
}
 }
</style> 
