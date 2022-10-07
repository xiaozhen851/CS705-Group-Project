<template>
  <div class="bar">
    <div class="bar-container">
      <div class="search-area item">
        Check by a URL:
      </div>
      <el-input class="item" placeholder="Enter website address here" v-model="url" clearable></el-input>
      <el-button class="item" type="primary">Check</el-button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      url: '',
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
}

.bar-container .item {
  margin-right: 16px;
}

.el-input {
  width: 350px;
}
</style>
