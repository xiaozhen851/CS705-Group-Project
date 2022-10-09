<template>
  <div class="bar">
    <div class="bar-container">
      <div class="search-area item">Check by a URL:</div>
      <el-input
          class="item"
          placeholder="Enter website address here"
          prefix-icon="el-icon-link"
          v-model="url"
          clearable
          id="urlContent"
      />
      <el-button class="item" type="primary" @click="storageData">Check</el-button>
    </div>
    <slot />
  </div>
</template>

<script>

let urlArr =[];

export default {
  name: "TopBar",
  data() {
    return {
      url: '',
    }
  },
  methods:{
    storageData() {
    console.log(window.localStorage.getItem('urls')===null)
      // check whether localstorage has existed
    // yes push privious value to newArr
    if(window.localStorage.getItem('urls')!==null){

      urlArr = JSON.parse(window.localStorage.getItem("urls"))
      console.log(urlArr)
      urlArr.push(this.url)
      let newa =  JSON.stringify(urlArr)

      window.localStorage.setItem("urls",newa)
      // location.reload()
    }else{
      urlArr.push(this.url)
      let newa =  JSON.stringify(urlArr)
      console.log(newa)
      window.localStorage.setItem("urls",newa)

    }



    }
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}

.bar-container {
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 12px;
  font-size: 14px;
}

.bar-container .item {
  margin-right: 16px;
}

.el-input {
  width: 350px;
}
</style>
