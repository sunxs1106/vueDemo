<template>
  <div id="app">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br><br>
    <input type="checkbox" name="checkbox"  v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>


    <div id="example-5">
      <select v-model="selected">
        <option disabled >请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div id="example-6">
      <select v-model="selected1" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected1 }}</span>
    </div>

    <div>
      <select v-model="selected2">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected2 }}</span>
    </div>
    <div>
      <input type="radio" v-model="picked" value="a">
      <span>Picked: {{ picked }}</span>
      <br>
      <input type="checkbox" v-model="checked">
      <span>Checked: {{ checked }}</span>
      <br>
      <!--.lazy 修饰符表示在“change”时而非“input”时更新 -->
      <select v-model.lazy="selected">
        <option value="abc">ABC</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- .number修饰符自动将用户输入的值转为数字类型,这通常很有用,因为即便在 type = "number"时,Html返回的值也总会返回字符串 -->
    <input type="number" v-model.number="age">
    <br><br>
    <!-- .trim修饰符自动过滤用户输入的首位空白字符 -->
    <input type="text" v-model.trim="msg">
    <span>Message: {{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "inputtest",
  data() {
    return {
      message: "",
      msg: "",
      age: 0,
      checked: true,
      checkedNames: [],
      picked: [],
      selected: [],
      selected1: [],
      selected2: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>

<style>
#app {
  margin: 10px auto;
  width: 80%;
}
</style>
