<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(banner, i) in banners" :key="i"
    >
      <v-img height="100%" :src="banner.img">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 white--text">
            {{ banner.title }}
          </div>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        banners: [
            {img: "https://images.pexels.com/photos/1686974/pexels-photo-1686974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: '¡Oportunidad Única'},
            {img: "https://images.pexels.com/photos/2175711/pexels-photo-2175711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: '¡Arreglos Florales!'},
            {img: "https://images.pexels.com/photos/3875427/pexels-photo-3875427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: '¡50% dscto en Árboles'},
        ]
      }
    },
  }
</script>

<style>

</style>