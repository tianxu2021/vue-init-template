<!--
 * @Author: 田旭
 * @Date: 2022-01-14 16:24:21
 * @LastEditTime: 2022-01-24 15:24:12
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\views\error\505.vue
 * @Description: 505错误页面
 * 
-->
<template>
  <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
    <template #extra>
      <a-button type="primary" @click="toPreviousPage">
        重新加载
      </a-button>
    </template>
  </a-result>
</template>
<script>
import errMxin from '@/mixin/error.js'
let pageName = 'error_505'
export default {
  name:pageName,
  mixins:[errMxin],
  data() {
    return {}
  },
};
</script>
