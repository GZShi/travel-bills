<template>
  <div class="divide-container">
    <div class="plan" v-if="members.amount && members.amount.length > 0">
      <div class="type">按金额分摊：</div>
      <div class="item" v-for="(member, mi) in members.amount" :key="mi">
        <div class="name">{{member.name}}<span class="remark">{{member.remark}}</span></div>
        <div class="proportion">{{member.proportion}}</div>
        <div class="pay">¥{{(member.cny || 0).toFixed(2)}}</div>
      </div>
    </div>
    <div class="plan" v-if="members.proportion && members.proportion.length > 0">
      <div class="type">按比例分摊：</div>
      <div class="item" v-for="(member, mi) in members.proportion" :key="mi">
        <div class="name">{{member.name}}<span class="remark">{{member.remark}}</span></div>
        <div class="proportion">{{member.proportion}}</div>
        <div class="pay">¥{{(member.cny || 0).toFixed(2)}}</div>
      </div>
    </div>
    <!-- <div v-else style="color: gray; font-style: italic;">没有分摊细节</div> -->
  </div>
</template>

<script>
export default {
  props: ['plan', 'total'],
  mounted() {
  },
  computed: {
    members() {
      if (!this.plan) return {}

      let ret = {}
      let totalForProportion = this.total

      if (this.plan.members_amount) {
        // 按照实际金额分摊
        let total = this.plan.members_amount.reduce((prev, curr) => (prev + curr.value), 0)
        totalForProportion -= total

        let detail = this.plan.members_amount.map(m => {
          return {
            name: m.name,
            remark: m.remark,
            // proportion: `${(100*m.value/total).toFixed(2)}%`,
            proportion: '',
            cny: m.value
          }
        })

        ret.amount = detail
      }

      if (this.plan.members_proportion && totalForProportion > 0) {
        // 按设定比例分摊
        let totalProportion = this.plan.members_proportion.reduce((prev, curr) => (prev + curr.value), 0)
        let detail = this.plan.members_proportion.map(m => {
          return {
            name: m.name,
            remark: m.remark,
            proportion: `${m.value}/${totalProportion}`,
            cny: totalForProportion * m.value / totalProportion
          }
        })

        ret.proportion = detail
      }

      return ret
    }
  }
}
</script>

<style lang="less" scoped>
.divide-container {
  margin-top: .6em;
  padding-left: 5px;
  border-left: 2px solid #eee;

  .plan {
    margin-bottom: 6px;

    .type {
      border-bottom: .5px solid #eee;
      margin-bottom: 3px;
      padding-bottom: 3px;
      font-weight: bold;
    }

    .item {
      display: flex;
      flex-direction: row;

      .name {
        flex: 1;
        .remark {
          color: gray;
          font-style: italic;
          padding-left: 5px;
        }
      }
      .proportion { width: 4em; text-align: right; }
      .pay { width: 7em; text-align: right; }
    }
  }

}
</style>
