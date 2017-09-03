<template>
  <div id='home'>
    <mt-header fixed title="祝君好药房">
      <router-link to="/login" slot="right">
        <mt-button >登录</mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="searchValue"></mt-search>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../image/1.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../image/2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../image/3.jpg" /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default{
  data(){
  	  return{
  	  	searchValue:''
  	  }
  },
  

}
	
</script>

<style type="text/css">
  *{
  	margin: 0;
  	padding:0;
  }
  h1{
  	font-size: 2rem;
  }

  #home .mint-header{
  	z-index: 1000;
  	height: 7rem;
  	background-color:#488E0C;
  }
  #home .mint-header .mint-button{
  	font-size: 2rem;
  	height: auto;
  }
  #home .mint-header-title{
  	font-size: 3rem
  }
  #home .mint-search{
  	margin-top: 1.7rem;
  	height: auto;
  }
  #home .mint-searchbar-inner{
  	height: 3rem;
  }
  #home input,#home button,#home a{
  	font-size: 2.4rem;
  }
  #home .mint-swipe{
  	height: 28rem;
  }
  #home img{
  	height: auto;
  	width: 100%;
  	
  }
</style>