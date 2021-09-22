<template>
  <div>
    <nav-bar></nav-bar>
    <h1>Aquí estaran mis productos</h1>
    <v-container>
      <h2 class="mt-12 mb-4">Plantas de interior</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasInterior" :key="producto.id">
          <v-card class="mx-auto" width="100%">
              <!-- el llamado a la imagen :src="" tambien puede ser v-bind:src="" -->
            <v-img
              class="white--text align-end"
              height="200px"
              :src="producto.img"
            >
              <v-card-title>{{producto.name}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{producto.description}}</div>
              <!-- <div :v-text="producto.description"></div> -->
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Ver Detalle</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="mt-12 mb-4">Plantas de Exterior</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasExterior" :key="producto.id">
          <v-card class="mx-auto" width="100%">
              <!-- el llamado a la imagen :src="" tambien puede ser v-bind:src="" -->
            <v-img
              class="white--text align-end"
              height="200px"
              :src="producto.img"
            >
              <v-card-title>{{producto.name}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{producto.description}}</div>
              <!-- <div :v-text="producto.description"></div> -->
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Ver Detalle</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="mt-12 mb-4">Arboles frutales</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.arbol" :key="producto.id">
          <v-card class="mx-auto" width="100%">
              <!-- el llamado a la imagen :src="" tambien puede ser v-bind:src="" -->
            <v-img
              class="white--text align-end"
              height="200px"
              :src="producto.img"
            >
              <v-card-title>{{producto.name}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{producto.description}}</div>
              <!-- <div :v-text="producto.description"></div> -->
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Ver Detalle</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import { mapState } from 'vuex'

export default {
  components: {
    NavBar,
  },
  computed: {
      //aqui llamamos a lo que tenemos en el state del store
      ...mapState(['productos'])
  }
};
</script>

<style>
</style>