<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from 'vue'
    import router from "../router";

    const flag1 = ref(false);
    const buttonClicked1 = ()=>{ router.push("/cart"); }
</script>

<template>

    <div class="signupWrapper">
   <div class="signupwrap">
       <div class="Signuptitle">
            Sign Up
       </div>
       <div class="signupshade">

       </div>
       <div class="SignupBody">
           <div class="inputBox">
                <label for="inp" class="inp">Full Name</label>
                <input type="text" id="inp" placeholder="John Doe">
           </div>
           <div class="inputBox">
                <label for="inp" class="inp">Email</label>
                <input type="text" id="inp" placeholder="example@gmail.com">
           </div>
            <div class="inputBox">
                <label for="inp" class="inp">Password</label>
                <input type="password" id="inp" placeholder="password" >
            </div>
            <div class="inputBox">
                <label for="inp" class="inp">Phone Number</label>
                <input type="text" id="inp" placeholder="01**********" >
           </div>
           <div class="container-radio">
              <div class="radio-group">
                <label class="radio-label">
                  <input class="radio-style" type="radio" name="role" value="client">
                  <span>Client</span>
                </label>
                <label class="radio-label">
                  <input class="radio-style" type="radio" name="role" value="supplier">
                  <span>Supplier</span>
                </label>
              </div>
            </div>
       </div>
       <div class="signupfooter">
            <button type="button" class="button-9" role="button" @click="buttonClicked1" >Create an account</button>
       </div>
   </div>
   </div>
</template>
<style>
input[type='radio'] {
    accent-color: rgba(170, 69, 11,.829);
}
.container-radio {
      width: 200px;
      margin: 0 auto;
    }
    .radio-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .radio-label {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    .radio-label input[type="radio"] {
      margin-right: 5px;
    }
    .radio-label span {
      font-weight: bold;
    }
.signupWrapper{
    position: relative;
    /* background: rgba(255,152,17, .5); */
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 100px;
    background-size: cover;
    animation: changeSignIn 30s linear infinite alternate-reverse;
}
.signupshade{
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100px;
    height:5px;
    background: black;
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #232323;
  /* background-color: rgba(170, 69, 11,.829); */
  /* background-color: rgba(0, 0, 0, 0.836); */
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
    .signupBody{

    }
    .inputBox{
        width:300px;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .inputBox input{
        height:2rem;
    }

    .inputBox label{
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .signupwrap{
        position: relative;
        z-index: 100;
        align-self: center;
        height:580px;
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 65%;
        min-width: 340px;
        /* background: rgba(255, 255, 255, 0.185); */
        background: rgb(255, 255, 255);
        border-radius: 10px;
        /* box-shadow: rgba(0,109,240, 0.1) 0px 4px 12px; */
        box-shadow: rgba(0, 0, 0, 0.2) 0px 54px 55px, rgba(0, 0, 0, 0.12)
        0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .Signuptitle{
        margin-top: 25px;
        font-family: sans-serif;
        font-weight: bolder;
        font-size: 2.5em;
    }
    @keyframes changeSignIn{
  0%{
    background: url(../assets/image4.jpg);
    background-repeat: no-repeat;
    background-size: 105% 105%;
  }
  /* 50%{
    background: url(../assets/image2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  } */
  40%{
    background: url(../assets/image4.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }80%{
    background: url(../assets/image5.jpg);
    background-repeat: no-repeat;
    background-size: 105% 105%;
  }100%{
    background: url(../assets/image5.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

</style>