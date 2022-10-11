<template>
  <div class="home">
    <el-container>
      <el-header height="auto">
        <div class="top-title">
          Alt it!
          <span>Suggest alt text for images</span>
        </div>
        <div class="top-bar">
          <el-button type="text" icon="el-icon-info" @click="goAbout">About</el-button>
          <el-button type="text" @click="goSuggestion" icon="el-icon-message">Send a suggestion</el-button>
        </div>
<!--        <top-bar class="top-bar">-->
<!--          <email-dialog />-->
<!--        </top-bar>-->
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-button type="primary" @click="goAbout">About alt text and Alt it!</el-button>
          <br />
          <el-button type="primary" @click="goSuggestion">Submit an alt text suggestion</el-button>
          <br />
          <el-button type="primary" @click="goToSourceCode">Source code and the extension</el-button>
        </el-aside>
        <el-main>
          <introduction-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import EmailDialog from '@/components/EmailDialog.vue'
// import TopBar from '@/components/TopBar';
// import ImageList from '@/components/ImageList';
// import HistoryComp from '@/components/HistoryComp';
import IntroductionView from '@/views/IntroductionView';

export default {
  name: 'HomeView',
  components: {
    IntroductionView
  },
  methods: {
    goAbout() {
      this.$router.push('/about');
    },
    goSuggestion() {
      this.$router.push('/suggestion');
    },
    goToSourceCode() {
      window.open('https://github.com/xiaozhen851/CS705-Group-Project', '_blank');
    }
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
  text-align: right;
  padding: 8px 20px;
}

.el-header {
  padding: 0;
}

.el-aside {
  padding: 20px;
}

.el-aside .el-button {
  width: 100%;
  margin-bottom: 20px;
}
</style>
