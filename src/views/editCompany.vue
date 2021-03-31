<template>
  <div>
    <h1 class="is-size-2">Editing: {{ data.name }}</h1>
    <form>
      <label>Name</label><br />
      <input type="text" :placeholder="data.name" :value="data.name" /><br />

      <label>Domain</label><br />
      <input type="text" :placeholder="data.domain" :value="data.domain" /><br />

      <label># of employees</label><br />
      <input type="text" :placeholder="data.numberOfEmployees"
        :value="data.numberOfEmployees" /><br />

      <label>Subscriptions per employee</label><br />
      <input type="text" :placeholder="data.subscriptionsPerEmployee"
        :value="data.subscriptionsPerEmployee" /><br />
    </form>
    <br />
    <a class="button is-small is-primary" @click="back">Back</a>&nbsp;
    <a class="button is-small is-primary" @click="submit">Submit</a>
  </div>
</template>

<script>

export default {
  name: 'EditCompany',
  props: ['company'],
  data() {
    return {
      temp: 0,
      data: this.company,
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    submit() {
      // this doesn't work correctly yet to display newly entered values....
      console.log(this.data);
      alert(`${this.data.name} 
      | ${this.data.domain} 
      | ${this.data.numberOfEmployees}
      | ${this.data.subscriptionsPerEmployee}`);
    },
  },
  mounted() {
    this.data = this.company;
  },
};
</script>

<style>
</style>
