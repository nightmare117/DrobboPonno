<script setup>
const emit = defineEmits(['response','responseNotification','responseCart'])

// setInterval(()=>console.log(props.item2),2000)
const openBankInfo = ()=>{
    emit('response',true)
}
const openNotification = ()=>{
    emit('responseNotification',true)
}
const openCart = ()=>{
    emit('responseCart',true)
}
</script>
<template>
    <div class="navBack">
        <div class="navTitle">
            <p>Drobbo<span class="navTitleSpan">Ponno</span></p>
        </div>
        <div class="navCenter">
            <!-- some free space for future works -->
        </div>
        <div class="navButtons">
            <div class="navButtonPaddin">
                <img  @click="openBankInfo" class="bankButton" src="../assets/bank.png" title="bank information" alt="bankInfo"/>
            </div>
            <div class="navButtonPaddin">
                <img @click="openNotification" class="notificationButton" src="../assets/notification.png" title="notifications" alt="notification"/>
            </div>
            <div class="navButtonPaddin">
                <img @click="openCart" class="cartButton" src="../assets/cart.png" title="cart" alt="cart"/>
            </div>
            <div class="dropdown">
                <button class="dropdown-button">{{userInfo.userName}}<span class="dropdownSpanImg"><img src="../assets/downarrow.png" alt="dropdown"/></span></button>
                <div class="dropdown-content">
                <a href="#">Logout</a>
                <!-- <a href="#">Logout option 2</a> -->
                <!-- <a href="#">Logout option 3</a> -->
            </div>
  </div>

            <!-- <p>John Doe</p> -->
        </div>
    </div>
</template>
<script>
import localStorageService from "../services/localStorageService";
export default {
  name: "navbar",
  data() {
    return {
      userInfo:{
        type: null,
        userName: '',
      },
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo(){
      this.userInfo.userName = localStorageService.getUserInfo().user_name;
    }
  }
};
</script>
<style>
.dropdownSpanImg img{
    height: 15px;
    width: 15px;
    margin-left: 10px;
    vertical-align: middle;
}
.navButtonPaddin{
    width: 40px;
    height: 22px;
}
.notificationButton:hover{
    height: 21px;
}
.cartButton:hover{
    height: 21px;
}
.bankButton:hover{
    /* padding-bottom: 5px; */
    /* background: rgba(170, 69, 11,.6); */
    /* border-radius: 100px; */
    height: 20px;
}
.bankButton{
    height: 19px;
    cursor: pointer;
}
.navButtons p{
    color: white;
    margin-right: 40px;
    margin-left: 80px;
}
.cartButton{
    height: 20px;
    /* margin-left: 15px; */
    cursor: pointer;
}
.notificationButton{
    height: 20px;
    cursor: pointer;
    /* margin-left: 15px; */
}
.navButtons{
    display: flex;
    width: 80%;
    justify-content: flex-end;
}
.navCenter{
    /* width: 40%; */
}
.navTitleSpan{
    color: rgba(170, 69, 11,1);
    font-weight: 500;
}
.navTitle p{
    color: white;
    margin-left: 20px;
    font-size: 17px;
    font-weight: 300;
    /* letter-spacing: 2px; */
}
.navTitle{
    width: 20%;
}
.navBack{
    position: fixed;
    width: 100vw;
    height: 60px;
    background: rgba(0, 0, 0, 0.84);
    display: flex;
    align-items: center;
    z-index: 1;
}
</style>
