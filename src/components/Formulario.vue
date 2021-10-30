<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Nombres" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nombres"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Apellido paterno" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.apPaterno"
          :options="apaterno"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Apellido Materno" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.apMaterno"
          :options="amaterno"
          required
        ></b-form-select>
      </b-form-group>

    <b-form-group>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted">
      Soy extranjero
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
    </b-form-group>


     <b-form-group id="input-group-6" label="Telefono" label-for="input-6">
        <b-form-select
          id="input-6"
          v-model="form.telefono"
          :options="phone"
          required
        ></b-form-select>
      </b-form-group>

      <!--fecha-->
      <b-form-group id="input-group-7" label="Fecha de Ingreso" label-for="input-7">
      <label for="example-datepicker">Fecha de Ingreso</label>
      <b-form-datepicker 
      id="example-datepicker" 
      v-model="form.fechaingreso" 
      class="mb-2">
      </b-form-datepicker>
      <p>Value: '{{ fechaingreso }}'</p>
      </b-form-group>



       <b-form-group id="input-group-8" 
       label="Fecha de Salida" 
       label-for="input-8">
       <label for="example-datepicker">Fecha de Salida</label>
      <b-form-datepicker 
      id="example-datepicker" 
      v-model="form.fechasalida" 
      class="mb-2">
      </b-form-datepicker>
      <p>Value: '{{ fechasalida }}'</p>
      </b-form-group>


      <b-form-group id="input-group-5" label="Medio de pago" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.mediodepago"
          :options="mediodepago"
          required
        ></b-form-select>
      </b-form-group>


<!--dos botones-->

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Simular Reserva</b-button>
      <b-button type="reset" variant="danger">Confirmar Reserva</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          nombres: '',
          paterno: '' ,
          materno: '',
          status: 'not_accepted',
          telefono:'',
          fechaingreso: '',
          fechasalida: '',
          mediodepago:'',
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.nombres = ''
        this.form.paterno = ''
        this.form.materno = ''
        this.form.status = ''
        this.form.telefono = ''
        this.form.fechaingreso = ''
        this.form.fechasalida = ''
        this.form.mediodepago = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
