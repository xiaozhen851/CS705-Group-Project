<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>
            <email-dialog></email-dialog>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import EmailDialog from '@/components/EmailDialog.vue'

export default {
  name: 'HomeView',
  components: {
    EmailDialog
  }
}
</script>
