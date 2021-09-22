<template>
  <div>
    <nav-bar></nav-bar>
    <h1>Aquí estaran mis productos</h1>
    <v-container>
      <h2 class="mt-12 mb-4">Plantas de interior</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasInterior" :key="producto.id">
          <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
          <products-comp :producto="producto"></products-comp>
        </v-col>
      </v-row>

      <h2 class="mt-12 mb-4">Plantas de Exterior</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasExterior" :key="producto.id">
            <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
            <products-comp :producto="producto"></products-comp>
        </v-col>
      </v-row>

      <h2 class="mt-12 mb-4">Arboles frutales</h2>
      <v-row>
        <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.arbol" :key="producto.id">
        <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
            <products-comp :producto="producto"></products-comp>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import ProductsComp from "../components/Products";
import { mapState } from "vuex";

export default {
  components: {
    NavBar,
    ProductsComp,
  },
  computed: {
    //aqui llamamos a lo que tenemos en el state del store
    ...mapState(["productos"]),
  },
};
</script>

<style>
</style>