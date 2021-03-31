<template>
  <div class="changeForm">
    <h1 class="is-size-3">Change Number of Employees</h1>
    <form>
      <label># of employees</label><br />
      <input type="text" v-model="inputData">
        {{ inputData }}
      <br /><a class="button is-small" @click="submit">Submit</a>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ChangeNumOfEmployees',
  props: {
    inputData: Number,
  },
  data() {
    return {
      temp: 0,
      companies: [],
    };
  },
  methods: {
    submit() {
      this.$emit('update', this.inputData);
    },
  },
};
</script>

<style>
.changeForm {
  border: 1px solid black;
  margin: 2em;
  padding: 1em;
  width: 500px;
}
</style>
