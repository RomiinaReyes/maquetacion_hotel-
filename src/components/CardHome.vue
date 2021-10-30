<template>
  <b-card
    :header="nombre"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="primary"

    :footer="precio"
    footer-tag="footer"
    footer-text-variant="white"
    footer-bg-variant="secondary"
    footer-border-variant="danger"
    style="max-width: 20rem;"
  >
  </b-card>
</template>

<script>
export default {
    name:"CardHome",
    props:{
        nombre: String,
        precio: Number
    }
}
</script>

<style scoped>
.card{
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>