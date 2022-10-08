<template>
    <div id='showUrl'>
         <ul>
            <li v-for="item in items" v-bind:key="item">{{item}}</li>
         </ul>
        
    </div>
</template>
<script>
    




export default {
  data(){
      return{
        
         items:JSON.parse(window.localStorage.getItem('urls')),

      }
  }
  
}

</script>
