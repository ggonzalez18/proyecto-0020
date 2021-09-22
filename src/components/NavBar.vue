<template>
  <div>
    <v-app-bar
      app
      color="teal darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text><v-icon>mdi-home</v-icon><span class="mr-2">Home</span></v-btn>
      <v-btn to="/productos" text><v-icon>mdi-flower</v-icon><span class="mr-2">Productos</span></v-btn>
      <v-btn to="/contacto" text><v-icon>mdi-message</v-icon><span class="mr-2">Contacto</span></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
   
    }),
  }
</script>
