<template>
  <i class="iconfont" :class="[iconclass, extraclass]"></i>
</template>

<script>
var map = {
  chuangzao: 'icon-chuangzao',
  fenlei1: 'icon-fenlei',
  arrowup: 'icon-xiangshang',
  arrowdown: 'icon-xiangxia',
  searh: 'icon-sousuo',
  zixun: 'icon-shouye',
  xihuan: 'icon-xihuan',
  wode: 'icon-wode',
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraclass: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconclass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4416344_i2o1nv5wvp.css';
</style>
```