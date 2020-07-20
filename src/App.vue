<template>
  <div id="app">
    <h1 class="vue-title">PHE CASES LONDON BOROUGHS</h1>
    <vue-data-table :lines="lines" />    
  </div>
</template>

<script>
import VueDataTable from "@/components/VueDataTable";

export default {
  name: "app",
  components: {
    VueDataTable
  },
  data() {
    return {
      lines: []
    };
  },
  async created() {
    const { data } = await this.axios.get("http://localhost:5000/cases");
    this.lines = data;
  }
};
</script>
