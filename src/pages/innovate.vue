<template>
  <div class="head">
    <Headerlist/>
  </div>
  <div class="main">
    <!-- <h1>创造梦工厂</h1> -->
  </div>
  <div class="home">
    <div class="homeHead">
      <Headersead />
    </div>
    <div class="homeBody">
      <div class="card">
        <swipe :imageList="imgList" />
      </div >
      <img alt="Vue logo" src="../../public/logo.jpg" class="logo"/>
      <el-button class="button" type="primary" @click="count++">你好x{{ count }}</el-button>
    </div>
  </div>
  
</template>

<script>
import Headerlist from '../components/header.vue';
import swipe from '../components/swipe.vue';
export default{
  name:'innovate',
  components:{
    Headerlist,
    swipe,
  },
  data() {
    return {
      count: 0,
      imgList: ['./1.jpg','./2.jpg','./3.jpg','./4.jpg','./5.jpg'],
    };
  },
}
</script>

<style scoped>
.home {
  height: 100vh;
  width: 80vw;
}

.homeBody {
  height: 88.4%;
  width: 100vw;
  margin-right: 100px;
  justify-content: center;
  align-items: center;
}

.card {
  width: 80vw;
  height: 40vh;
}

.logo{
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-left: 50px;
}

.bottom{
  display: inline-block;
  width: 100px;
  height: 10vh;
  margin: 0;
  margin-top :20px;
}
</style>

