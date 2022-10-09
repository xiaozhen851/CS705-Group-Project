<template>
    <div class="history-container">
      <div class="history-title">
        <i class="el-icon-s-data"></i>
        URL History
      </div>
      <div>
        <div v-for="(item, index) in urls" :key="index" class="history-item">
          {{item}}
        </div>
      </div>
    </div>
</template>

<script>
export default {

  data(){
      return{
        urls:JSON.parse(window.localStorage.getItem('urls'))
      }
  },

  mounted(){
      let _this = this;

      window.addEventListener("setItemEvent", function(e) {
		if (e.key === "urls" || localStorage.getItem('urls')!==null) {

            console.log(JSON.parse(e.newValue))

			_this.urls=JSON.parse(e.newValue).reverse().slice(0,35);

		}
	})

  }
}

</script>

<style scoped>
.history-container {
  background: rgb(217, 236, 255);
  padding: 20px;
  margin: 20px 0 0 20px;
  min-height: 500px;
}

.history-container .history-title {
  text-align: center;
  color: #909399;
  font-weight: 500;
}

.history-container .history-item {
  background: white;
  margin-top: 20px;
  padding: 12px;
}
</style>
