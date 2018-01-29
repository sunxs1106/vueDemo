<template>
  <div id="app">
    <ul>
      <!-- <li v-for="n in evenNumbers">{{ n }}</li> -->
      <li v-for="n in even( numbers )">{{ n }}</li>
      <router-link :to="{name: 'HelloWorld', params: {num: 123}}">跳转Hello</router-link>

      <br><br>
     <div>
       <!-- 时间修饰符: .stop, .prevent, .captrue, .self, .once(可以用点串联使用,但是使用的顺序很重要,不一样的顺序可能会有不一样的结果) -->
        <button @click.stop="count += 1">add count</button>
       
        <!-- 在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：列如enter -->
       
        <!--  .enter, .tab, .delete (捕获“删除”和“退格”键), .esc, .space, .up, .down, .left, .right -->
       
        <!-- 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
             .ctrl, .alt, .shift, .meta
            (在 Mac 系统键盘上，meta 对应 command 键 (⌘)。
            在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。
            在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。
            在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。
            在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。)
         -->

        <button @keydown.63="count += 1">add counter</button>
        <br>
        <!-- .ctrl修饰符表示按住ctrl时才触发点击事件,但是同时按住ctrl+alt或者ctrl+其他按键时也会触发 -->
        <!-- .ctrl.exact二连修饰符表示只有ctrl一个键被按下时才会触发, .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。 -->
        <button @click.ctrl.exact="count += 2">ctrl点击事件</button>
        <button @click.exact="count += 3">没有系统修饰符被按下才增加</button>
        
        <!-- .left, .right, .middle 限制特点鼠标点击事件的触发 -->
        <button @click.right.prevent="count += 5">鼠标右键点击才会触发</button>
        <button @click.middle="count += 4">鼠标中间键点击才会触发</button>
     </div>
      <p>The button above has been clicked {{ count }} times.</p>

      <br>
      <button @click="greet">Greet</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      count: 0,
      name: "Vue.js"
    };
  },
  methods: {
    even(numbers) {
      return numbers.filter(num => {
        return num % 2 === 0;
      });
    },
    greet(event) {
      alert("Hello " + this.name + "!");
      if (event) {
        alert(event.target.tagName);
      }
    }
  },
  computed: {
    // evenNumbers(){
    //   return this.numbers.filter((num) => {
    //     return num%2 === 0
    //   })
    // }
  },
  mounted() {}
};
</script>

<style>
#app {
  width: 80%;
  margin: 10px auto;
}
</style>
