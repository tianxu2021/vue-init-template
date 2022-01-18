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
    return {};
  },
};
</script>
