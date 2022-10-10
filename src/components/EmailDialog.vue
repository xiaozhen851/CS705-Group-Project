<template>
  <div>
    <el-button type="text" icon="el-icon-info" @click="goAbout">About</el-button>

    <!-- Form Dialog -->
    <el-button type="text" @click="dialogFormVisible = true" icon="el-icon-message">Send a suggestion</el-button>

    <!-- Send email to input address -->

    <el-dialog title="Submit an alt text suggestion" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-positon="top" id="suggestionForm" ref="form" @submit.prevent="sendEmail">

        <el-form-item label="Email Address:">
          <el-input v-model="form.email" autocomplete="off" type="email" name="user_email"></el-input>
        </el-form-item>

        <el-form-item label="Image URL:">
          <el-input v-model="form.url" autocomplete="off" type="url" name="url"></el-input>
        </el-form-item>

        <el-form-item label="Suggestion for alt text:">
          <el-input v-model="form.suggestion" autocomplete="off" name="message"></el-input>
        </el-form-item>

        <el-form-item label="Your name:">
          <el-input v-model="form.name" autocomplete="off" type="text" name="user_name"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="sendEmail">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  // this method handle send email
  methods: {
    goAbout() {
      this.$router.push('/about');
    },

    sendEmail() {
      // console.log(document.querySelector("#suggestionForm"))
      this.dialogFormVisible = false;
      emailjs.sendForm('service_7fqw828', 'template_14md40a', document.querySelector("#suggestionForm"), 'yRy9vWK1Wefguz6q9')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            alert("EMAIL SEND SUCCESS!");
          }, (error) => {
            console.log('FAILED...', error.text);
            alert("EMAIL SEND FAILED!");
          });
    }
  },
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
