<template>
  <div>
    <!-- <span>{{ message }}</span> -->
    <button @click="incrementCounter">{{counter}}</button>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
   // 声明 props
  // props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  // template: '<span>{{ message }}</span>'
  props: {
     // 基础类型检测 (`null` 指允许任何类型)
    propA: Number,
    // 可能是多种类型
    propB: [String, Number],
    // 必传且是字符串
    message: {
      type: String,
      required: true
    },
    // 数值且有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  },
  methods: {
    incrementCounter () {
      this.counter += 1;
      this.$emit("increment");
    }
  }
}
</script>

<style>

</style>

