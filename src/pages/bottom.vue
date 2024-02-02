<template>
  <div class="main">
    <router-view></router-view> 
  </div>
  <div class="foot">
    <div class="footmenu">
      <span @click="goToInnovate"><Icon type="chuangzao" extraclass="icon"/></span>
      <span @click="goToQuestion"><Icon type="zixun" extraclass="icon"/></span>
      <span @click="goToLike"><Icon type="xihuan" extraclass="icon"/></span>
      <span @click="goToMy"><Icon type="wode" extraclass="icon"/></span>
    </div>
    
  </div>
</template>

<script>
import Icon from "../components/icon.vue";
export default{
  name:'bottom',
  components:{
    Icon,
  },

  methods:{
    goToInnovate(){
      this.$router.push('/innovate')
    },
    goToQuestion(){
      this.$router.push('/question')
    },
    goToLike(){
      this.$router.push('/like')
    },
    goToMy(){
      this.$router.push('/my')
    }
  }
}


</script>

<style scoped>
.main{
  width: 90vw;
  height: 90vh;
  margin:auto;
  padding: auto;
  background-color:#fff;
}
.foot{
  width: 100vw;
  height:10vh;
}

.footmenu{
  box-shadow: 0px -1px 1px #dcdfe6;
  width: 90vw;
  height: 10vh;
  background-color:transparent;
  line-height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon{
  font-size: 30px;
}
</style>

