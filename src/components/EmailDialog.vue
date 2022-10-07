<template>
  <div>
  <!-- Form -->
  <el-button type="primary" @click="dialogFormVisible = true">Submit</el-button>

  <el-dialog title="Submit an alt text suggestion" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="Email Address to send suggestion:" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Suggestion for alt text:" :label-width="formLabelWidth">
        <el-input v-model="form.suggestion" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Your name:" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">Submit</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        email: '',
        suggestion: '',
      },
      formLabelWidth: '120px'
    };
  }
};
</script>

<style scoped>

</style>
