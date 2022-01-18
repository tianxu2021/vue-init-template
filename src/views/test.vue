<template>
  <a-list>
    <RecycleScroller
      v-infinite-scroll="handleInfiniteOnLoad"
      style="height: 400px"
      :items="data"
      :item-size="73"
      key-field="email"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <a-list-item slot-scope="{ item }">
        <a-list-item-meta :description="item.email">
          <a slot="title" :href="item.href">{{ item.name.last }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
      </a-list-item>
    </RecycleScroller>
    <a-spin v-if="loading" class="demo-loading" />
  </a-list>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
export default {
  directives: { infiniteScroll },
  components: {
    RecycleScroller,
  },
  data() {
    return {
      data: [{
        email: "maelle.renaud@example.com",
        gender: "female",
        nat: "FR",
        name:{
          first: "Maëlle",
          last: "Renaud",
          title: "Mrs"
        }
      }],
      loading: false,
      busy: false,
    };
  },
  created() {
    this.fetchData().then(res=>{
      this.data = res
    })
  },
  methods: {
    fetchData(){
      return new Promise(resolve => {
        let arr = []
        for (let i = 0; i < 10; i++) {
         arr.push({
            email: "maelle.renaud@example.com",
            gender: "female",
            nat: "FR",
            name:{
              first: "Maëlle",
              last: "Renaud",
              title: "Mrs"
            }
          })
        }
        resolve(arr)
      })
    },
    handleInfiniteOnLoad() {
      const data = this.data;
      this.loading = true;
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.fetchData().then(res=>{
        this.data = data.concat(res).map((item, index) => ({ ...item, index }));
        this.loading = false;
      })
    },
  },
};
</script>
<style scoped>
.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
