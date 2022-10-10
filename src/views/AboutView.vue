<template>
  <div class="about">
    <el-container>

      <el-header height="auto">

        <div class="top-title">
          Alt it!
          <span>About Alt it!</span>
        </div>
        <div class="top-bar">
          <el-button type="text" icon="el-icon-back" @click="goHome">Back home</el-button>
        </div>

      </el-header>

      <el-main>

        <h1>What is alt text?</h1>
        <div id="blurb">
          <p>
            Alt text, also known as alternative text, alt attribute, and alt description, is a HTML tag which contains a snippet of text.
            You may be familiar with it as the writing that appears when an image can't load, but it is used for other things as well.
            Very importantly, it is used by screen reading and other accessibility software to describe graphical elements to visually impaired users.
            It is also used for search engine optimisation.
          </p>
        </div>

        <div id="goal">
          <h2>
            Why have we created Alt It?
          </h2>
          <p>
            Currently, many images do not have alt text, although this is required by the Web Content Accessibility Guidelines.
            Even when images do have alt text, often it is not descriptive or useful!
          </p>
          <p>
            To check if an image has alt text, you can use your browsers inspection tools, or install one of the many extensions available.
          </p>
          <p>
            Through the Alt It! browser extension, you can contribute to making the internet a more accessible place, by suggesting alt text to website owners and administrators who are missing it.
          </p>

          <h2>For users</h2>
          <p>
            Check out some tips on how to write good alt text <a href="https://accessibility.huit.harvard.edu/describe-content-images">here</a> or <a href="https://supercooldesign.co.uk/blog/how-to-write-good-alt-text">here</a>, and use Alt It! to send it to the website where the image is located!
          </p>

          <h2>For websites</h2>
          <p>If you want to implement an alt text suggestion you have recieved, or want to improve your website's accessibility and search engine optimization, ask your website manager and / or administrator.</p>
          <p>If you manage your own website, find the place in your HTML where the image tag is, and add the alt text as an attribute like this:</p>
          <code>img src="imageURL" alt="Detailed and clear description of image"></code>
        </div>

      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/suggestion');
    }
  }
}
</script>

<style scoped>
.about {
  text-align: left;
}

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

.el-main {
  padding-top: 0;
}
</style>
