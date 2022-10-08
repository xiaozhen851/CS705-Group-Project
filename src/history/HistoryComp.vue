<template>
    <div id='showUrl'>
         <ul>
            <li v-for="item in urls" v-bind:key="item">{{item}}</li>
         </ul>
        
    </div>
</template>
<script>
    

export default {

// return{
//           // get data from localsotrage
//          items:JSON.parse(window.localStorage.getItem('urls')),
//       }

    
  data(){
      return{
        urls:JSON.parse(window.localStorage.getItem('urls'))
      }
  },
  
  mounted(){
      var _this = this;

      window.addEventListener("setItemEvent", function(e) {
		if (e.key === "urls") {

            console.log(JSON.parse(e.newValue))

			_this.urls=JSON.parse(e.newValue);



		}
	})
  }
}

</script>
