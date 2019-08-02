<template>
  <div class="bills-container">
    <order v-for="(order, oi) in orders" :key="oi" :data="order" />
  </div>
</template>

<style lang="less" scoped>
.bills-container {
  padding: 20px 0;
  background-color: #efefef;
}
</style>


<script>
import Order from './Order.vue'
export default {
  components: { Order },
  data() {
    return {
      orders: [{
        title: '阿联酋航空',
        items: [
          {name: '香港-阿联酋', unit_price_cny: 1234.00, quantity: 1},
          {name: '阿联酋-罗马', unit_price_cny: 2345.12, quantity: 1},
          {name: '罗马-阿联酋', unit_price_cny: 1234.00, quantity: 1},
          {name: '阿联酋-香港', unit_price_cny: 2344.12, quantity: 1}
        ],
        date: '2019-07-21 12:00:00',
        pay_cny: 7157.24,
        prepay: 'BaoKD',
        divide_plan: {
          members_amount: [],
          members_proportion: [
            {name: 'ShiGZ', value: 1, remark: '经济舱'},
            {name: 'BaoKD', value: 1, remark: '经济舱'},
            {name: 'HuangD', value: 1, remark: '头等舱'}
          ]
        }
      },{
        title: '希尔顿酒店',
        items: [
          {name: '豪华双人间', unit_price_cny: 2300.11, quantity: 1},
          {name: '普通双人间', unit_price_cny: 1233.45, quantity: 2}
        ],
        date: '2019-03-21 12:00:00',
        pay_cny: 2893.22,
        prepay: 'ShiGZ',
        divide_plan: {
          members_amount: [
            {name: 'ShiGZ', value: 1335.26, remark: '豪华双人间'},
            {name: 'BaoKD', value: 789.87, remark: '标准双人间'},
            {name: 'HuangD', value: 789.87, remark: '标准双人间'}
          ],
          members_proportion: []
        }
      },{
        title: '米兰广场',
        items: [],
        date: '2019-07-11 12:00:00',
        pay_cny: 4292.53,
        prepay: 'HuangD',
        divide_plan: {
          members_amount: [
            {name: 'ShiGZ', value: 2000.00, remark: '购物'}
          ],
          members_proportion: [
            {name: 'BaoKD', value: 2, remark: '吃饭'},
            {name: 'HuangD', value: 2, remark: '吃饭'}
          ]
        }
      }]
    }
  }
}
</script>
