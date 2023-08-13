<script setup>
import { ref } from 'vue'

    const props = defineProps({
        product1quantity: String,
        product2quantity: String,
        product3quantity: String,
        pstatus:Boolean,
        orderStatus:Number,
        id:Number})

    const str = ref('Your Payment is Not Successful, maybe insufficient balance!')
    let x = `Your payment is successful for ${props.product1quantity} Leather Wallets, ${props.product2quantity} Apple Ipad Pro, ${props.product3quantity} Table Lamp`
    if(props.pstatus == true){
        str.value = x;
    }
</script>

<template>
    <div class="notificationComponent">
      <template v-if="userInfo.type === 1">
        <template v-if="orderStatus === 0">
          <p>{{ 'You have a pending request' }}</p>
        </template>
        <template v-if="orderStatus === 1">
          <p>{{ 'Your request has been approved the product will delivered to your doorsteps soon' }}</p>
        </template>
      </template>
      <template v-if="userInfo.type === 2">
        <template v-if="orderStatus === 0">
          <p>{{ 'You have a pending request for some products' }}</p><button type="button" class="btn btn-primary" @click="approveProduct(id)">Approve</button> <button type="button" class="btn btn-primary">Reject</button>
        </template>
        <template v-if="orderStatus === 1">
          <p>{{ 'You have approved a product request' }}</p>
        </template>
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
        console.log(data)
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
        console.log("Hello World")
        console.log(data);
      },()=>{

      })
    },
  }
};
</script>
<style>
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
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>