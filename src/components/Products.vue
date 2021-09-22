<template>
  <div>
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

            <v-row justify="center">
            <v-card-actions>
              <v-btn color="green" dark small>Ver Detalle</v-btn>
            </v-card-actions></v-row>
          </v-card>
  </div>
</template>

<script>
export default {
props: {
    producto: Object,
}
}
</script>

<style>

</style>