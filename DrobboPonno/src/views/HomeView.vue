<script setup>
import {ref} from 'vue'

const startButtonClicked = () => {
  // this.$router.push('/mainview')
   window.location.assign("/register")
}
</script>

<template>
  <div class="homeBack" ref="Background">
    <div class="home1">
      <h1>
        <span class="homeViewTitleSpan"></span>Drobbo<span class="homeViewTitleSpan">Ponno</span>
      </h1>
      <!-- <div class="homeviewLine"></div> -->
      <h7>Your go-to online store for a huge selection of high-caliber goods. Simple browsing, choice, and purchase. Create your protected bank details for transactions that go smoothly. As we handle the transaction procedure, we can guarantee quickness and transparency so you may have a flawless buying experience. Our website keeps you informed of the status of your purchase while our dependable supplier guarantees prompt delivery. With Drobboponno, your go-to e-commerce solution, you can confidently shop.</h7>
    </div>
    <div class="home2" >
      <div class="home2button" @click="startButtonClicked">
      <p>Get Started</p>
      <img src="../assets/arrow.png" alt="arrow"/>
      </div>
    </div>
    <!-- <video class="videoBack" autoplay loop muted plays-inline>
      <source src="../assets/autonomousvehicle.mp4" type="video/mp4">
    </video> -->
  </div>
</template>

<style>
.homeviewLine{
  height: 3px;
  width: 100px;
  background: rgb(170,69,11);
  margin-bottom: 20px;
  border-radius: 20px;
  margin-left: 70px;
}
.homeViewTitleSpan{
  /* font-size: 80px; */

  color: rgb(170, 69, 11);
}
.home2button img{
  height: 15px;
  width: 15px;
  margin-left: 12px;
}
.home2button p{
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgba(0, 0, 0, 0.829);
  
}
.home2button:hover{
  /* padding: 2px; */
  padding-left: 10px;
  /* padding-right: 15px; */
  margin-bottom: 93px;
}
.home2button{
  /* align-self: flex-end; */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 140px;
  height: 35px;
  /* background: rgba(123, 57, 161, 0.918); */
  background: linear-gradient(90deg ,rgb(118, 182, 44), rgba(31, 141, 145, 0.658));
  align-self: flex-end;
  margin-bottom: 95px;
  margin-left: 80px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
}
.home1 h7{
  line-height: 1.5;
  /* margin-top: 10px; */
  margin-left: 70px;
  color: rgb(255, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.home1 h1{
  font-size: 60px;
  margin-top: 450px; 
  margin-left: 70px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.home1{
  /* background: rgba(0, 0, 0, 0.479); */
  background: linear-gradient(90deg,rgba(0, 0, 0, 0.795),rgba(0, 0, 0, 0.479));
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* margin-top: 300px; */
  /* margin-left: 50px; */
  /* justify-content: center; */
  
}
.home2{
  /* background: rgba(0, 0, 0, 0.479); */
  background: linear-gradient(90deg,rgba(0, 0, 0, 0.473),rgba(0, 0, 0, 0.171));
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
}
.homeBack{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  width: 100vw;
  background-size: cover;
  animation: change 30s linear infinite alternate-reverse;
}
/* .videoBack{
  /* position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1; 
  width: 100vw
} */

@keyframes change{
  0%{
    background: url(../assets/image2.jpg);
    background-repeat: no-repeat;
    background-size: 110% 110%;
  }
  /* 50%{
    background: url(../assets/image2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  } */
  40%{
    background: url(../assets/image2.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }80%{
    background: url(../assets/image1.jpg);
    background-repeat: no-repeat;
    background-size: 110% 110%;
  }100%{
    background: url(../assets/image1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
