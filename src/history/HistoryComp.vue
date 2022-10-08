<template>
    <div id='showUrl'>
         <ul>
            <li v-for="(item,index) in urls.slice(0,10)" v-bind:key="index">{{item}}</li>
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
        urls:JSON.parse(window.localStorage.getItem('urls')).reverse()
      }
  },
  
  mounted(){
      var _this = this;

      window.addEventListener("setItemEvent", function(e) {
		if (e.key === "urls") {

            console.log(JSON.parse(e.newValue))

			_this.urls=JSON.parse(e.newValue).reverse();



		}
	})
  }
}

</script>
