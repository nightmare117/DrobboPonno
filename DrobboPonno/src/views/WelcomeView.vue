<script setup>
import { ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "../views/RegisterView.vue";
// import 'bootstrap/dist/css/bootstrap.css'

const style1 = {
    color: 'rgb(170, 69, 11)',
    fontSize: '1.2rem'
}

const style11 = ref(style1);
const style22 = ref(null);
const flag = ref(true);

const button1Clicked = () => {
    style11.value=style1;
    flag.value=true;
    style22.value=null;
}

const button2Clicked = () => {
    style22.value=style1;
    flag.value=false;
    style11.value=null;
}

</script>

<template>
  <div class="welcomeViewContainer">
    <header>
      <img
        alt="tallykhata logo"
        class="logo"
        src="@/assets/accounting.png"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld />
        <div>
            <div class="homedecoration"></div>
        <div class="welcomeViewButtonGroup">
            <button :style="style11" @click="button1Clicked">Sign In</button>
            <button :style="style22" @click="button2Clicked">Sign Up</button>
        </div>

        </div>
      </div>
        
    </header>

    <div class="welcomeViewRight">
        <div v-if="flag">
            <SignInView/>
        </div>
      <div v-else>
          <RegisterView/>
      </div>
     </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.homedecoration {
  margin-top: 5px;
  width: 20px;
  height: 10px;
  background: rgba(0, 0, 0, 0.13);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-left: 60px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  /* color: hsla(160, 100%, 37%, 1); */
  color: rgb(0, 109, 240, 1);
  transition: 0.4s;
}

@media (min-width: 1024px) {
  .welcomeViewContainer{
      display: flex;
      /* background: url('../assets/image3.jpg');
      background-repeat: no-repeat;
      background-size: cover; */
  }

  .welcomeViewRight{
      width: 50%;
  }

  .welcomeViewButtonGroup{
      margin-top: 15px ;
      margin-right: 10px !important;
      /* margin-left: 10px; */
      margin-left: -6px;
  }

  .welcomeViewButtonGroup button{
      font-size: .8rem;
      padding: 5px;
      margin-right: 10px;
      border: none;
      background: none;
  }

  .welcomeViewButtonGroup button:hover{
      font-weight: bold;
  }

  header {
    display: flex;
    place-items: center;
    width: 50%;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
