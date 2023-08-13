<script setup>
import { ref } from "vue";
import notificationComponent from "./notificationComponent.vue";
const props = defineProps({
  notificationflag: Boolean
//   shopNumber:String
});

const noNotificationFlag = ref(false)

const emit = defineEmits(["responsenotificationmodal"]);

const addDebt = () => {

};
const addNotificationFalse=()=>{
  emit("responsenotificationmodal", false);
}
// console.log(props.shopFlag);
</script>

<template>
  <div v-if="props.notificationflag" class="modalBodyNotification">
    <div class="notificationModalCenter">
      <button @click="addNotificationFalse" class="closeButton">X</button>
      <h1>Notifications</h1>
      <div class="notificationBody">
        <div v-if="noNotificationFlag" class="noNotification">
            <img class="noNotificationImg" src="../assets/nonotification.png" alt="no-notification" />
            <p class="noNotificationP">No Notifications Yet</p>
        </div>
        <div v-else>
            <div style="margin-top: 30px;"></div>
          <template v-for="notification in notificationList">
            <notificationComponent :id="notification.id" :cid="notification.customer_id" :pid="notification.product_id"
                            :quantity="notification.product_quantity" :status="notification.status" :sid="notification.supplier_id"
            />
          </template>
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
<!--            <notificationComponent :product1quantity="2" :product2quantity="1" :product3quantity="1"-->
<!--            :pstatus="true"/>-->
        </div>
      </div>
      <!-- <div class="notificationModalSpan"></div> -->
      <!-- <div class="debtModalSpan1"></div> -->

    <!-- <button @click="wowClicked"></button> -->
  </div>
  </div>
</template>
<script>
import localStorageService from "../services/localStorageService";
import authService from "../services/auth.service";
import router from "../router";
import apiService from "../services/api.service";
export default {
  name: "notificationModal",
  data() {
    return {
      notificationList : [],
    };
  },
  mounted() {
    // apiService.setToken(localStorageService.getToken());
    this.getUserInfo();
    setInterval(this.getProductOrderUpdates,2000)
    setInterval(this.getPendingRequests,2000)
  },
  methods: {
    getPendingRequests(){
      authService.getPendingRequests((data)=>{
        if(localStorageService.getUserInfo().type == 2){
          console.log(data)
          this.notificationList = data;
        }
        // console.log("Hello World")
        // console.log(data);
      },()=>{

      })
    },
    getUserInfo(){
      apiService.setToken(localStorageService.getToken());
      //this.userInfo.userId = localStorageService.getUserInfo().id;
      // if(localStorageService.getUserInfo().type == 2)router.push("/supplier");
    },
    getProductOrderUpdates(){
      authService.getProductOrderUpdates((data)=>{
        if(localStorageService.getUserInfo().type == 1){
          console.log(data)
          this.notificationList = data;
          this.notificationList.reverse();
        }
        // console.log("Hello World")
        // console.log(data);
      },()=>{

      })
    },
  }
};
</script>
<style>
.noNotificationP{
    /* width: 250px; */
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: black;
}
.noNotificationImg{
    /* padding-left: 30px; */
    height: 150px;
    width: 150px;
    margin-top: 100px;
}
.noNotification{
    /* background: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.notificationBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* justify-content: center; */
    /* background: white; */
    width: 80%;
    height: 85%;
    overflow-y: auto;
    overflow-x: hidden;
}
h1{
    margin: 0px !important;
}
.notificationModalSpan {
  border-radius: 10px;
  margin-top: 3px;
  width: 100px;
  height: 4px;
  background: rgba(170, 69, 11,.6);
}

.closeButton:hover {
  background: rgb(255, 0, 0);
  color: white;
  /* padding: 5px; */
}

.closeButton {
    cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 12px;
  border: none;
  font-size: 16px;
  /* background: red; */
  /* background: none; */
  /* background: rgb(136, 6, 6); */
  font-weight: bold;
  border-radius: 3px;
}

.modalBodyNotification {
  z-index: 100000 !important;
  width: 100%;
  height: 100%;
  /* background-color: rgb(0, 0, 0); */
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* margin-top: 100px; */
}

.notificationModalCenter {
    margin-top: 40px;
  height: 580px;
  width: 800px;
  border-radius: 10px;
  background: rgb(236, 236, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
