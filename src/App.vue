<template>
  <div id="app">
    <h1 class="vue-title">PHE CASES LONDON BOROUGHS</h1>
    <vue-data-table :lines="lines" @changeDates="changeDates" />
    <vue-chart :lines="lines" :start-date="startDate" :end-date="endDate" />
  </div>
</template>

<script>
import VueDataTable from "@/components/VueDataTable";
import VueChart from "@/components/VueChart";

export default {
  name: "app",
  components: {
    VueDataTable,
    VueChart
  },
  data() {
    return {
      lines: [],
      startDate: "",
      endDate: ""
    };
  },
  async created() {
    const { data } = await this.axios.get("http://localhost:5000/cases");
    this.lines = data;
  },
  methods: {
    changeDates({ startDate, endDate }) {
      this.startDate = startDate;
      this.endDate = endDate;
      this.lines = [...this.lines];
    }
  }
};
</script>
