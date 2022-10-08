<template>
  <div class="home">
    <el-container>
      <el-header height="auto">
        <div class="top-title">
          Alt it!
          <span>Suggest alt text for images</span>
        </div>
        <TopBar class="top-bar">
          <email-dialog></email-dialog>
        </TopBar>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
          <HistoryComp />
        <el-main>
          <image-list />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import EmailDialog from '@/components/EmailDialog.vue'
import TopBar from '@/components/TopBar';
import ImageList from '@/components/ImageList';
import HistoryComp from '@/history/HistoryComp';

export default {
  name: 'HomeView',
  components: {
    EmailDialog,
    TopBar,
    ImageList,
    HistoryComp
  }
}
</script>

<style scoped>
.top-title {
  background: #409EFF;
  color: white;
  padding: 24px;
  font-size: 36px;
  text-align: left;
}

.top-title span {
  font-size: 16px;
  margin-left: 16px;
}

.top-bar {
  background: rgb(217, 236, 255);
}

.el-header {
  padding: 0;
}
</style>
