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
        </div>
      </el-header>
      <el-main>
        <el-form :model="form" label-positon="top" id="suggestionForm" ref="form" @submit.prevent="sendEmail">

          <el-form-item label="Recipient Email:">
            <el-input v-model="form.email" autocomplete="off" type="email" name="user_email"></el-input>
          </el-form-item>

          <el-form-item label="Website URL:">
            <el-input v-model="form.url" autocomplete="off" type="url" name="url"></el-input>
          </el-form-item>

          <el-form-item label="Suggestion for alt text:">
            <el-input v-model="form.suggestion" autocomplete="off" name="message"></el-input>
          </el-form-item>

          <el-form-item label="Your name:">
            <el-input v-model="form.name" autocomplete="off" type="text" name="user_name"></el-input>
          </el-form-item>

        </el-form>
        <el-button type="primary" @click="sendEmail">Submit</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  created() {
    const checkUrl = this.$route.query.url || '';
    this.form.url = decodeURIComponent(checkUrl);
    const message = this.$route.query.message || '';
    this.form.suggestion = decodeURIComponent(message);
    const email = this.$route.query.user_email || '';
    this.form.email = decodeURIComponent(email);
  },
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
      form: {
        name: '',
        email: '',
        suggestion: '',
        url: '',
      }
    };
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
  text-align: left;
  padding: 8px 20px;
}

.el-header {
  padding: 0;
}
</style>
