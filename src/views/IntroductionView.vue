<template>
    <div class="about">
    <el-container>

      <el-main>

        <h2>Alt text checker and suggestion sharing extension</h2>
        <div>
          <p>
            This project consists of two parts - the browser extension and the web application.
          </p>
          <p>
            Please clone the entire repository <a href="https://github.com/xiaozhen851/CS705-Group-Project">here</a> and follow the below directions to view the project.
          </p>
          <p>
            The web app is available live at <a href="https://altit.netlify.app/">https://altit.netlify.app/</a>
          </p>
        </div>

        <br>
        <div id="addingTheExtension">
          <h2>
            Adding the extension to your browser
          </h2>
          <ul>
            <li>In your Google Chrome browser, select the puzzle piece icon to the right side of the URL bar.</li>
            <li>Select 'Manage Extensions' at the bottom of the drop-down list.</li>
            <li>Check that 'Developer Mode' in the top right corner is toggled ON.</li>
            <br>
            <img style="width: 100%; border: 2px solid black;" src="../assets/developerModeimage.png">
            <li>Select 'Load unpacked' and choose the 'src' folder.</li>
            <li>If successfully added, the extension should now appear in the list that opens when the puzzle piece icon is clicked, select 'Alt Text Checker' to open the pop-up.</li>
            <li>Optional: On the drop down extensions menu, you can select the push pin icon to keep the Alt It extension in your toolbar.</li>
          </ul>
        </div>

        <hr>

        <div id="usingTheExtension">
          <h2>
            Using the extension
          </h2>
          <p>
            The application is still in the development stage, so we do not reccomend sending emails directly to websites yet.
            For this reason and due to technical constraints, we have not fully implemented the planned feature of automatically crawling a webpage to find website contact information.
          </p>
          <p>
            We suggest entering your own email address as the recipient so that you can see the contents of the email and test the functionality.
          </p>
          <p><strong>Notes about using the extension:</strong></p>
          <ul>
            <li>Please ensure the extension is installed before opening the webpage you wish to use it on.</li>
            <li>The pop-up form does not allow input for pages with no valid images found.</li>
          </ul>
        </div>


      </el-main>

    </el-container>
  </div>

</template>

<script>
export default {
  name: "IntroductionView"
}
</script>

<style scoped>
li {
  padding: 2px;
}

.el-main {
  text-align: left;
}
</style>
