<!--
 * @Author: 田旭
 * @Date: 2022-01-14 16:23:51
 * @LastEditTime: 2022-01-24 15:23:54
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\views\error\404.vue
 * @Description: 404错误页面
 * 
-->
<template>
  <a-result status="404" title="404" sub-title="对不起，您访问的页面不存在。">
    <template #extra>
      <a-button type="primary" @click="toPreviousPage">
        返回
      </a-button>
    </template>
  </a-result>
</template>
<script>
import errMxin from '@/mixin/error.js'
let pageName = 'error_404'
export default {
  name:pageName,
  mixins:[errMxin],
  data() {
    return {}
  },
};
</script>