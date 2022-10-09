<template>
    <div id='showUrl'>
         <ul>
            <li v-for="(item,index) in urls" v-bind:key="index">{{item}}</li>
         </ul>
        
    </div>
</template>
<script>
    

export default {

  data(){
      return{
        urls:JSON.parse(window.localStorage.getItem('urls'))
      }
  },
  
  mounted(){
      let _this = this;

      window.addEventListener("setItemEvent", function(e) {
		if (e.key === "urls" || localStorage.getItem('urls')!==null) {

            console.log(JSON.parse(e.newValue))

			_this.urls=JSON.parse(e.newValue).reverse().slice(0,35);

		}
	})
     
  }
}

</script>
