<template>

  <div class="titile">
  <el-page-header :icon="null">
    <template #content>
    <drawer/>
  </template>
    <template #extra>
      <div class="flex items-center right">
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </template>

  </el-page-header>
</div>
</template>

<script>
import drawer from './drawer.vue'
export default{
  name:'my',
  components:{
    drawer
  }
}
</script>

<style>
.title{
  width: 100vw;
  height: 8vh;
  background-color: #5EC28A;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right{
  padding-left: 100px;
}
</style>