<template>
  <div>
    <h1 class="is-size-2">Viewing: {{ company.name }}</h1>
    <form>
      <label>Name</label><br />
      <input type="text" :placeholder="company.name" readonly /><br />

      <label>Domain</label><br />
      <input type="text" :placeholder="company.domain" readonly /><br />

      <label># of employees</label><br />
      <input type="text" :placeholder="company.numberOfEmployees" :value="employeeCount"
        readonly /><br />

      <label>Subscriptions per employee</label><br />
      <input type="number" :placeholder="company.subscriptionsPerEmployee" readonly /><br />

      <label>Total subscriptions</label><br />
      <input type="text"
        :placeholder="company.numberOfEmployees * company.subscriptionsPerEmployee" readonly />
        <br />
    </form>
    <ChangeNumOfEmployees :inputData="employeeCount" @update="employeeCount = $event;" />
    <a class="button is-small is-primary" @click="back">Back</a>&nbsp;
  </div>
</template>

<script>
import ChangeNumOfEmployees from '../components/numberOfEmployees.vue';

export default {
  name: 'ViewCompany',
  props: ['company'],
  components: {
    ChangeNumOfEmployees,
  },
  data() {
    return {
      temp: 0,
      companies: [],
      employeeCount: this.company.numberOfEmployees,
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
