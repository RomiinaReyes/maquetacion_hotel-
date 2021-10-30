<template>
  <div>
    <b-card-group deck>
      <b-card
        title="Indicador"
      >
        <b-card-text>Moneda</b-card-text>
        <h6>{{ nombre }}</h6>
      </b-card>

      <b-card title="Title" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Valor</h6>
        <h1>{{ valor }}</h1>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
    nombre: String,
    valor: Number,
    },
};
</script>
