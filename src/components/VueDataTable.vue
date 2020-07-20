<template>
  <div class="container">
    <h2 class="mt-5 mb-5 text-center">COVID-19 DATA TABLE</h2>
    <v-client-table :data="tableData" :columns="columns" :options="options">
    </v-client-table>
  </div>
</template>

<script>
export default {
  props: {
    lines: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      columns: ["area_code", "area_name", "date", "new_cases", "total_cases"],
      tableData: [],
      options: {
        headings: {
          area_code: "Area code",
          area_name: "Area",
          date: "Date",
          new_cases: "New cases",
          total_cases: "Total cases"
        },
        filterByColumn: true,
        sortable: ["area_code", "area_name", "date"],
        filterable: ["area_code", "area_name", "date"]
      }
    };
  },
  watch: {
    lines() {
      this.tableData = this.lines;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  width: 95%;
  margin-top: 50px;
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__sortable {
  cursor: pointer;
}

.VueTables__sort-icon {
  margin-left: 10px;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}

.VueTables__filter-placeholder {
  color: #aaa;
}

.VueTables__list-filter {
  width: 120px;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>
