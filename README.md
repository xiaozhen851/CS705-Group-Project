
# alt-text-checker

## Contents  

This project consists of two parts - the browser extension and the webpage.  
Please clone the entire repository and follow the below directions to view the project.  
The webpage is available live at <https://altit.netlify.app/#/>

---

## Adding the extension to your browser

- In your Google Chrome browser, select the puzzle piece icon to the right side of the URL bar.
- Select 'Manage Extensions' at the bottom of the drop-down list.
- Check that 'Developer Mode' in the top right corner is toggled ON.  
  
  ![Screenshot of chrome extension manager](developerModeimage.png)
- Select 'Load unpacked' and choose the 'src' folder.
- If successfully added, the extension should now appear in the list that opens when the puzzle piece icon is clicked, select 'Alt Text Checker' to open the pop-up.
- Optional: On the drop down extensions menu, you can select the push pin icon to keep the Alt It extension in your toolbar.

---

## Using the extension

The application is still in the development stage, so we do not reccomend sending emails directly to websites yet. For this reason and due to technical constraints, we have not fully implemented the planned feature of automatically crawling a webpage to find website contact information. 

We suggest entering your own email address as the recipient so that you can see the contents of the email and test the functionality.
  
Notes about using the extension

- Please ensure the extension is installed before opening the webpage you wish to use it on.
- The pop-up form does not allow input for pages with no valid images found.  

---

## Project setup

``` command
npm install
```

### Compiles and hot-reloads for development

``` command
npm run serve
```

### Compiles and minifies for production

``` command
npm run build
```

### Lints and fixes files

``` command
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
