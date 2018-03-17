<template>
    <div class="login" @click="inputText">
    	<div class="logo">
    		<img src="../assets/login/logo.png" alt="">
    	</div>
    	<div class="inputForm">
    			<input type="text" v-model="username" class="inputCont" @click="empty($event)">
    			<input type="text" v-model="password" class="inputPassword" @click="empty($event)">
    	</div>
    	

    </div>
</template>

<script type="ecmascript-6">
    export default{
    	data(){
    		return{
    			username:'Username',
    			password:'Password'
    		}
    	},
    	methods:{
    		empty(event){
    			// console.log(event)
    			event.value='';
    		},
    		inputText(){
    			if(this.username==''){
    				this.username='Username';
    			}
    			if(this.password==''){
    				this.password='Password';
    			}
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
    .login{
    	background:url('../assets/login/bg.jpg') no-repeat center;
    	background-size:cover;
    	height:100vh;
    	margin:0px;
    	padding:0px;
    	.logo{
    		padding-top:3.06666667rem;
    		text-align:center;
    	}
    	.inputForm{
    		margin:1.93333333rem auto 0;
    		width:8.04rem;
	    	.inputCont{
	    		background:url('../assets/login/username.png') no-repeat left center;
	    	}
	    	.inputPassword{
	    		background:url('../assets/login/password.png') no-repeat left center;
	    	}
	    	.inputCont,.inputPassword{
	    		color:#fff;
	    		height:.98666667rem;
	    		@include font-dpr(16px);
	    		display:block;
	    		width:7.28rem;
	    		border:none;
	    		padding-left:.77333333rem;
	    		outline:none;
	    		border-bottom:1px solid #fff;
	    		line-height:1.2rem;

	    	}
    	}
    }
</style>