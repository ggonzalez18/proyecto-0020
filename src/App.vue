<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
//se importa footer solo en app vue para que se vea en todas las vistas
import FooterComp from './components/FooterComp';

export default {
  name: 'App',
  components: {
    FooterComp,
  },
  data: () => ({
    //
  }),
};
</script>
