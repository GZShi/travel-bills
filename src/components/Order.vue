<template>
  <div class="order-container" v-if="data">
    <div class="title">
      <span>{{data.title}}</span>
      <small class="prepay">{{data.prepay}}</small>
    </div>
    <div class="date">{{data.date}}</div>
    <div class="detail" v-if="data.items && data.items.length > 0">
      <div class="item" v-for="(item, i) in data.items" :key="i">
        <div class="name">{{item.name}}</div>
        <div class="price">¥{{item.unit_price_cny.toFixed(2)}}</div>
        <div class="quantity">×{{item.quantity}}</div>
      </div>
    </div>
    <div class="detail" v-else style="font-style: italic; color: gray;">没有消费细节</div>
    <div class="payment">
      <div class="pay forex">
        <span>€</span>
        <span>123.00</span>
      </div>
      <div class="pay cny">
        <span>¥</span>
        <span>{{data.pay_cny.toFixed(2)}}</span>
      </div>
    </div>
    <div class="warn" v-if="totalDetail != data.pay_cny">
      <div>警告：明细与总额不匹配，相差{{(totalDetail - data.pay_cny).toFixed(2)}}</div>
    </div>

    <divide :total="data.pay_cny" :plan="data.divide_plan"></divide>
  </div>
  <div class="order-container" v-else>order is null</div>
</template>

<script>
import Divide from './Divide.vue'

export default {
  components: {Divide},
  props: ['data'],
  computed: {
    totalDetail() {
      if (!this.data) return 0

      if (this.data.items && this.data.items.length > 0) {
        return this.data.items.reduce((prev, curr) => (prev + curr.unit_price_cny * curr.quantity), 0)
      }
      return this.data.pay_cny
    }
  }
}
</script>



<style lang="less" scoped>
.order-container {
  font-size: 14px;
  margin-bottom: 15px;
  padding: .4em .7em;
  background-color: #fff;

  .title {
    font-size: 18px;
    padding: .4em 0 .1em 0;
    font-weight: bold;
    color: black;

    .prepay {
      font-weight: normal;
      font-style: italic;
      float: right;
    }
  }

  .date {
    margin-bottom: .8em;
  }

  .detail {
    margin: .5em 0;

    .item {
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;

      .name {
        flex: 1;
      }
      .price {
        width: 5em;
        text-align: right;
        font-weight: bold;
      }
      .quantity {
        text-align: right;
        color: gray;
        font-style: italic;
        padding-left: .4em;
      }
    }
  }

  .payment {
    text-align: right;
    color: gray;

    .cny {
      font-size: 16px;
      font-weight: bold;
      color: black;
    }
  }

  .warn {
    background-color: #f1bfbc;
    padding: .3em .7em;
    margin: 5px 0;
    color: #962704;
  }
}
</style>
