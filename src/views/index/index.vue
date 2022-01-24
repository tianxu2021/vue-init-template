<template>
  <div>
    <a-button @click="loadData(500000)">加载50w条</a-button>
    <vxe-list
      height="400"
      class="my-list"
      :loading="loading"
      :data="list"
      :scroll-y="{ gt: 100 }"
    >
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">
          {{ item.label }}
        </div>
      </template>
      
    </vxe-list>
    <vxe-table :align="allAlign" :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <template #empty>
        <span style="color: red">
          <img
            src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"
          />
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [],
      loading: false,
      mockList: [],
      allAlign: null,
      tableData: []
    };
  },
  mounted() {
    this.loadData(500);
  },
  methods: {
    getList(size) {
      const mockList = this.mockList;
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            label: `row_${index}`,
          });
        }
      }
      return mockList.slice(0, size);
    },
    loadData(size) {
      this.loading1 = true;
      setTimeout(() => {
        this.list = this.getList(size);
        this.loading = false;
        const startTime = Date.now();
        this.$nextTick(() => {
          this.$message.success({
            content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
            duration:2
          });
        });
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-list {
  border: 1px solid #000;

  .my-list-item {
    @include flex();
    line-height: 40px;
    transition: 0.4s all;
    &:hover {
      background-color: #4390ee;
      color: #fff;
    }
  }
}
</style>
