<template>
  <div class="content">
    <h1 class="is-size-2">Pax8</h1>
    <h2 class="is-size-4 sectionHeader">Companies</h2>
    <ul id="list">
      <li v-for="company in companies" :key="company.id">
        <br />ID: {{ company.id }}<br />Name: {{ company.name }}
        <br /><a class="button is-small" @click="edit(company)">Edit</a>
        <a class="button is-small" @click="view(company)">View</a>
      </li>
    </ul>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  data() {
    return {
      temp: 0,
      companies: [],
    };
  },
  mounted() {
    CompanyService.getAll().then((res) => {
      this.companies = res;
    }).catch();
  },
  methods: {
    edit(company) {
      this.$router.push({ name: 'EditCompany', params: { company } });
    },
    view(company) {
      this.$router.push({ name: 'ViewCompany', params: { company } });
    },
  },
};
</script>

<style>
#list {
  margin-top: 2em;
}

li {
  list-style: none;
  margin: 10px 0;
}
</style>
