<template>
  <div class="bar">
    <div class="bar-container">
      <div class="search-area item">Check by a URL:</div>
      <el-input
          class="item"
          size="small"
          placeholder="Enter website address here"
          prefix-icon="el-icon-link"
          v-model="url"
          clearable
          id="urlContent"
      />
      <el-button class="item" type="primary" size="small" @click="storageData">Check</el-button>
    </div>
    <slot/>
  </div>
</template>

<script>

let urlArr = [];

export default {
  name: "TopBar",
  data() {
    return {
      url: '',
    }
  },
  methods: {
    storageData() {
      console.log(window.localStorage.getItem('urls') === null)
      // check whether localstorage has existed
      // yes push privious value to newArr
      if (window.localStorage.getItem('urls') !== null) {

        urlArr = JSON.parse(window.localStorage.getItem("urls"))

        urlArr.unshift(this.url)
        // console.log(urlArr.length)

        if (urlArr.length > 10) {
          urlArr.pop()
        }

        window.localStorage.setItem("urls", JSON.stringify(urlArr))
        // location.reload()
      } else {

        urlArr.unshift(this.url)
        window.localStorage.setItem("urls", JSON.stringify(urlArr))

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
