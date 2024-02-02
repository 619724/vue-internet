<template>
  <div>
  <el-button class="set" type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer v-model="drawer" title="I am the title" :with-header="false"
  direction="ltr">
    <span>你来搞吧！我摆烂了！</span>
  </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style>
.set{
  width: 50px;
  height: 30px;
  margin: 20px;
}
</style>