import { defineStore } from 'pinia';

export const useFormularioStore = defineStore('formulario', {
  state: () => ({
    enviado: false
  }),
  actions: {
    enviarFormulario(formularioData) {
      // Aquí puedes realizar cualquier lógica adicional antes o después del envío del formulario
      console.log('Formulario enviado:', formularioData);
      this.enviado = true;
    }
  }
});
