<template>
  <NavBar />

  <div class="page_container">
    <div class="left_column">
      <div class="div_presentation">
        <div>
          <h2>Quienes somos</h2>
          <p>
            Somos un trío de comprometidas profesoras, Jone, Uxue y Ana <br />

            Nuestro viaje comenzó en nuestra época estudiantil,en los pasillos del centro donde llevamos a cabo nuestra formación. Unidas por el amor a la música, compartimos risas, tardes de ensayos y momentos de superación, consolidando una amistad única que se ha convertido en la base de Musicamente.<br />

            La clarinetista, con su espíritu enérgico y melódico, llenó nuestros días de acordes esperanzadores. A su lado, la ukelelista tejía con sus cuerdas mágicas una sinfonía de alegría y optimismo. Y, por supuesto, nuestra guía en el lenguaje musical, con su sabiduría y pasión, nos mostró el camino para interpretar las partituras con gracia y determinación.<br />

            Con el tiempo, nuestras experiencias compartidas nos llevaron a soñar en conjunto, a imaginar un lugar donde pudiéramos inspirar a otros a descubrir el poder transformador de la música. Así nació Musicamente school, un sueño hecho realidad.<br />

            En este rincón de aprendizaje musical, cada estudiante es acogido con cariño y empatía. Cada acorde es una oportunidad para descubrir emociones que laten en lo más profundo del alma. La música, para nosotras, no es solo una melodía, sino un viaje de autodescubrimiento y crecimiento personal.<br />

            Así que, si resuena en tí esto que estás leyendo y quieres explorar el universo de la música, te invitamos a unirte a Musicamente. ¡Te esperamos con los brazos abiertos!
          </p>
        </div>
        <div id="div_operation">
          <h2>Como impartimos nuestros cursos</h2>
          <p>
            Nuestro curso consta de tres secciones: clarinete, ukelele y lenguaje musical.
            <br />
            Iniciamos desde nivel principiante en todas las secciones. <br />
            Cada semana, publicaremos una nueva lección de libre acceso en cada área. <br />
            En nuestro Patreon, puedes suscribirte para acceder a contenido adicional y clases en vivo.<br />
            <a href="https://www.patreon.com/tuusuario" target="_blank">Patreon</a> <br />
            Las clases en directo te permiten interactuar con nuestras profesoras y otros estudiantes.
          </p>
        </div>
      </div>
    </div>
    <div class="right_column">
      <img src="/src/assets/images/about.jpg" alt="Foto Musicamente" />
      <h2>Envianos tus dudas o sugerencias</h2>
      <div class="form_div">
        <form action="mailto:musicamenteschool@correo.com" method="post" enctype="text/plain">
          <input type="text" id="nombre" placeholder="Nombre" required>
          <input type="email" id="email" placeholder="Email" required>
          <textarea id="mensaje" placeholder="Escribe aquí tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue'
</script>

<style scoped>
 
  .page_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 90%;
    margin: 0 auto;
    padding: 2%;
    column-gap: 2.2rem;
  }

  .left_column {
    flex: 1;
    padding-right: 2%;
  }

  .right_column {
    flex: 1;
    padding-left: 2%;
    max-width: 40%;
    text-align: center;
    background-image: url("../assets/images/background_musicamente4.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .div_presentation {
    text-align: justify;
    margin-bottom: 3%;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1%;
    color: #10bcdf;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }

  #div_operation {
    margin-top: 3%;
  }

  .right_column img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 3%;
  }

  .form_div {
    text-align: left;
  }

  .form_div input[type="text"],
  .form_div input[type="email"],
  .form_div textarea {
    width: 90%;
    padding: 2%;
    margin-bottom: 3%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.4rem;
  }

  .form_div button[type="submit"] {
    background-color: #10bcdf;
    color: #fff;
    padding: 2% 4%;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form_div button[type="submit"]:hover {
    background-color: #0056b3;
  }

  
  @media screen and (max-width: 850px) {
    .page_container {
      flex-direction: column;
    }
    .left_column,
    .right_column {
      max-width: 100%;
      padding: 2%;
    }
    .right_column {
      text-align: left;
    }
    .right_column img {
      margin: 0 auto;
    }
  }
</style>