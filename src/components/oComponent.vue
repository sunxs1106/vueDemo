<template>
  <div>
    <p>这是父组件的counter: {{ counter }}</p>
    <children message="hello" @increment="incrementTotal"></children> 
    <children message="hello" @increment="incrementTotal"></children> 



     <div>
      <label v-if="label">{{ label }}</label>
      
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        v-on:focus="selectAll"
        v-on:blur="formatValue"
      >
    </div>
    <br>
    <input type="text" @keyup.enter="count += 1">
    <span>Count : {{count}}</span>
  </div>
</template>

<script>
import child1 from "./child"
// console.log( child1 )
export default {
  name: "oComponent",
  data () {
    return {
      // message: "",
      counter: 0,
      count: 0
    }
  },
  components: {
    children: child1
  },
  methods: {
    incrementTotal () {
      this.counter += 1;
    },

     updateValue: function (value) {
      var result = currencyValidator.parse(value, this.value)
      if (result.warning) {
        this.$refs.input.value = result.value
      }
      this.$emit('input', result.value)
    },
    formatValue: function () {
      this.$refs.input.value = currencyValidator.format(this.value)
    },
    selectAll: function (event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  },
  mounted () {
    
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''      
    }
  },
  computed: {

  }





//   Vue.component('currency-input', {
//   template: '\
//     <div>\
//       <label v-if="label">{{ label }}</label>\
//       $\
//       <input\
//         ref="input"\
//         v-bind:value="value"\
//         v-on:input="updateValue($event.target.value)"\
//         v-on:focus="selectAll"\
//         v-on:blur="formatValue"\
//       >\
//     </div>\
//   ',
//   props: {
//     value: {
//       type: Number,
//       default: 0
//     },
//     label: {
//       type: String,
//       default: ''
//     }
//   },
//   mounted: function () {
//     this.formatValue()
//   },
//   methods: {
//     updateValue: function (value) {
//       var result = currencyValidator.parse(value, this.value)
//       if (result.warning) {
//         this.$refs.input.value = result.value
//       }
//       this.$emit('input', result.value)
//     },
//     formatValue: function () {
//       this.$refs.input.value = currencyValidator.format(this.value)
//     },
//     selectAll: function (event) {
//       // Workaround for Safari bug
//       // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
//       setTimeout(function () {
//       	event.target.select()
//       }, 0)
//     }
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     price: 0,
//     shipping: 0,
//     handling: 0,
//     discount: 0
//   },
//   computed: {
//     total: function () {
//       return ((
//         this.price * 100 + 
//         this.shipping * 100 + 
//         this.handling * 100 - 
//         this.discount * 100
//       ) / 100).toFixed(2)
//     }
//   }
// })



}
</script>

<style>

</style>
