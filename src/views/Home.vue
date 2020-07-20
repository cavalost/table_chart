<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <vue-data-table></vue-data-table>
    </div>
</template>

<script>
import VueDataTable from '@/components/VueDataTable'

export default {
  name: "Home",
  components: {
      VueDataTable
  }
};
</script>
