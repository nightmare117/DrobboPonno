<script setup>
import { ref} from 'vue'

    const props = defineProps({
        id:Number,
        cid: Number,
        pid: Number,
        quantity: Number,
        status: Number,
        sid:Number})
    
    const product = ref("");
    if(props.pid == 1){
      product.value = "Leather Wallet"
    }else if(props.pid==2){
      product.value = "Apple Ipad Pro"
    }else{
      product.value = "Table Lamp";
    }
</script>

<template>
    <div class="notificationComponent">
      <template v-if="userInfo.type === 1">
        <!-- <template v-if="orderStatus === 0">
          <p>{{ 'You have a pending request' }}</p>
        </template>
        <template v-if="orderStatus === 1">
          <p>{{ 'Your request has been approved the product will delivered to your doorsteps soon' }}</p>
        </template> -->
        <div style="display: flex;align-items: center;" v-if="status === 0">
          <img class="PendingImage" src="../assets/timer.png" alt="pending"/>
          <p>You have a pending request for {{ quantity }} {{ product }}<span v-if="quantity>1">s</span>.</p>
        </div>
        <div style="display: flex;align-items: center;" v-if="status === 1">
          <img class="successImage" src="../assets/checked.png" alt="success"/>
          <p>Your request has been approved for {{ quantity }} {{ product }}<span v-if="quantity>1">s</span>. The product will be delivered to your doorsteps soon.</p>
        </div>
      </template>
      <template v-if="userInfo.type === 2">
        <!-- <template v-if="Status === 0">
          <p>{{ 'You have a pending request for some products' }}</p><button type="button" class="btn btn-primary" @click="approveProduct(id)">Approve</button> <button type="button" class="btn btn-primary">Reject</button>
        </template>
        <template v-if="orderStatus === 1">
          <p>{{ 'You have approved a product request' }}</p>
        </template> -->
        <div style="display: flex;align-items: center;" v-if="status === 0">
          <img class="PendingImage" src="../assets/timer.png" alt="pending"/>
          <p>You have a pending request from customer id {{ cid }} for {{ quantity }} {{ product }}<span v-if="quantity>1">s</span>.</p>
          <button type="button" class="btn-approve" @click="approveProduct(id)">Approve</button> <button type="button" class="btn-reject">Reject</button>
        </div>
        <div style="display: flex;align-items: center;" v-if="status === 1">
          <img class="successImage" src="../assets/checked.png" alt="success"/>
          <p>You have approved a product request from customer id {{ cid }} for {{ quantity }} {{ product }}<span v-if="quantity>1">s</span>.</p>
        </div>
      </template>
    </div>
</template>
<script>
import localStorageService from "../services/localStorageService";
import authService from "../services/auth.service";
import router from "../router";
import apiService from "../services/api.service";
export default {
  name: "NotificationComponent",
  data() {
    return {
      userInfo:{
        type: null,
        userName: '',
        userId: null,
      },
      orderList: [],
    };
  },
  mounted() {
    //apiService.setToken(localStorageService.getToken());
    this.getUserInfo();
    setInterval(this.getProductOrderUpdates,5000)
  },
  methods: {
    approveProduct(id){
      var data = {
        id:id
      }
      authService.approveAProduct((data)=>{
        // console.log(data)
        // orderList.push(data)
        // console.log("hello")
        // console.log(this.orderList)
      },()=>{

      },data)
    },
    getUserInfo(){
      apiService.setToken(localStorageService.getToken());
      this.userInfo.userId = localStorageService.getUserInfo().id;
      this.userInfo.type = localStorageService.getUserInfo().type;
    },
    getProductOrderUpdates(){
      authService.getProductOrderUpdates((data)=>{
        // console.log("Hello World")
        // console.log(data);
      },()=>{

      })
    },
  }
};
</script>
<style>
.btn-reject:hover{
  background: red;
}
.btn-approve:hover{
  background: green;
}
.btn-reject{
  /* margin: 10px; */
  border-radius: 5px;
  cursor: pointer;
  background: rgba(255, 0, 0, 0.832);
  color: white;
  padding : 6px 10px 6px 10px;
  border: none;
  font-size: 14px;
}
.btn-approve{
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  background: rgba(0, 128, 0, 0.823);
  color: white;
  padding : 6px 10px 6px 10px;
  border: none;
  font-size: 14px;
}
.successImage{
  height: 23px;
  width: 23px;
  margin-right: 10px;
  margin-left: 2px;
}
.PendingImage{
  height: 30px;
  width: 30px;
  margin-right: 10px;
 
}
.notificationComponent p{
    width: 100%;
}
.notificationComponent{
    margin-top: 10px;
    width: 600px;
    padding: 20px;
    border-radius: 5px;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>