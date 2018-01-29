<template>
  <div id="test-app">
    <!-- <div class="box" :class="{ 'err-msg': isActive }"></div> -->
    <!-- <div class="box" :class="classObj"></div> -->
    <div class="box" :class="[widthClass, heightClass]"></div>
    <button @click="switchover">切换显示div样式</button>
    <!-- <div :style="{color: red,fontSize: fontSize}">圣诞节啊看似简单</div> -->
    <!-- <div :style="styleObj">圣诞节啊看似简单</div> -->
    <br><br>
    <div v-if="loginType">
      <label>Username</label>
      <input placeholder="Enter your username">
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </div>
    <br>
    <button @click="switchoverT">切换输入框</button>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <!-- <ul>
      <li v-for="(value,key) in Obj">
        {{key}} : {{value}}
      </li>
    </ul> -->

    <ul>
      <li v-for="(value,key,index) in Obj">
        {{index}}.{{key}} : {{value}}
      </li>
    </ul>


    <p>{{ $route.params.num }}</p>
  </div>
</template>




<script>
export default {
  name: "Test",
  data() {
    return {
      isActive: false,
      error: null,
      // classObj: {
      //   widthClass: false,
      //   heightClass: true,
      // }
      widthClass: "widthClass",
      heightClass: "heightClass",
      red: "#0f0",
      fontSize: "30px",
      styleObj: {
        color: "#f00",
        fontSize: "30px"
      },
      loginType: true,

      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      Obj: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    };
  },
  methods: {
    switchover() {
      this.isActive = !this.isActive;
      // this.classObj.widthClass = !this.classObj.widthClass;
      // this.classObj.heightClass = !this.classObj.heightClass;
    },
    switchoverT() {
      this.loginType = !this.loginType;
    }
  },
  mounted() {
    let that = this;
    that.items.push({ message: "Baz" });
    that.$set(that.items, 1, { message: "Too" });
    that.items.splice(2);
    // that.items.splice(1, 1, {message: "Too"})

    that.$set(that.Obj, "class", "一年2班");
    that.Obj = Object.assign({}, that.Obj, {
      score: 100,
      favoriteColor: "Vue Green"
    });
  },
  computed: {
    classObj() {
      return {
        widthClass: this.isActive && !this.error,
        heightClass: !this.isActive && !this.error
      };
    }
  }
};
</script>

<style scoped>
/* .box{
    margin: 0 auto;
    width: 80%;
    height: 100px;
    border: 1px solid #0f0;
  } */
.err-msg {
  border: 1px solid #f00;
}
.widthClass {
  width: 100%;
}
.heightClass {
  height: 50px;
  border: 1px solid #f00;
}
ul {
  margin: 20px auto;
  width: 60%;
  text-align: left;
}
</style>
