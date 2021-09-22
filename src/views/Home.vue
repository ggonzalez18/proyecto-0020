<template>
<div>
  <nav-bar></nav-bar>
<banner-comp></banner-comp>
  <v-row justify="center" class="mt-12">
    <v-col cols="11">
      <h1 class="text-center">Nuestros productos</h1>
      <v-row>
        <v-col lg="2" xl="2" md="6" cols="12" v-for="producto in productos.plantasInterior" :key="producto.id">
        <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
        <v-card-subtitle>Interior</v-card-subtitle>
            <products-comp :producto="producto"></products-comp>
        </v-col>
        <v-col lg="2" xl="2" md="6" cols="12" v-for="producto in productos.plantasExterior" :key="producto.id">
        <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
            <v-card-subtitle>Exterior</v-card-subtitle>
            <products-comp :producto="producto"></products-comp>
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col lg="4" xl="4" md="6" cols="12" v-for="producto in productos.arbol" :key="producto.id">
        <!-- esta etiqueta nos dibuja la card que trae desde el componente, a través de un props -->
            <v-card-subtitle>Arbol</v-card-subtitle>
            <products-comp :producto="producto"></products-comp>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import ProductsComp from '../components/Products'
  import BannerComp from '../components/Banner'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      NavBar,
      ProductsComp,
      BannerComp,
    },
    computed: {
      ...mapState(['productos'])
    }
  }
</script>
