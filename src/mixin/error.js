/*
 * @Author: 田旭
 * @Date: 2022-01-14 16:27:46
 * @LastEditTime: 2022-01-24 15:09:57
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\mixin\error.js
 * @Description: 404、505报错页面mxin
 *
 */
const mxins = {
  methods: {
    toPreviousPage() {
      this.$router.go(-1);
    },
  },
};
export default mxins;
