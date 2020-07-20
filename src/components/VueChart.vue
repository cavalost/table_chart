<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h2 class="text-center">COVID-19 CHART</h2>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <h3 class="text-center">New Cases</h3>
        <line-chart
          :chartData="arrNewCases"
          :options="chartOptions"
          :chartColors="newCasesColors"
          label="New Cases"
        />
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col">
        <h3 class="text-center">Total Cases</h3>
        <line-chart
          :chartData="arrTotalCases"
          :options="chartOptions"
          :chartColors="totalCasesColors"
          label="Total Cases"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import LineChart from "@/components/LineChart";
export default {
  components: {
    LineChart
  },
  props: {
    lines: {
      type: Array,
      default: () => []
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      arrNewCases: [],
      newCasesColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      },
      arrTotalCases: [],
      totalCasesColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  watch: {
    lines() {
      this.arrTotalCases = [];
      this.arrNewCases = [];
      const startDate = moment(this.startDate, "YYYY-MM-DD").format("MM/DD");
      const endDate = moment(this.endDate, "YYYY-MM-DD").format("MM/DD");
      this.lines.forEach(d => {
        const date = moment(d.date, "YYYY-MM-DD").format("MM/DD");
        if (
          (!this.startDate && !this.endDate) ||
          (this.startDate && !this.endDate && date >= startDate) ||
          (!this.startDate && this.endDate && date <= endDate) ||
          (this.startDate &&
            this.endDate &&
            date >= startDate &&
            date <= endDate)
        ) {
          const { new_cases, total_cases } = d;
          const totalCases = this.arrTotalCases.find(el => el.date === date);
          if (totalCases) {
            totalCases.total += total_cases;
          } else {
            this.arrTotalCases.push({ date, total: total_cases });
          }

          const totalNewCases = this.arrNewCases.find(el => el.date === date);
          if (totalNewCases) {
            totalNewCases.total += new_cases;
          } else {
            this.arrNewCases.push({ date, total: new_cases });
          }
        }
      });
    }
  }
};
</script>
