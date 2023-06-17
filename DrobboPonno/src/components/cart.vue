<script setup>
import { ref,watch} from "vue";
import cartItem from "./cartItem.vue";
import { useToast } from 'vue-toastification';
const props = defineProps({
  cartflag: Boolean,
  item1: Boolean,
  item2: Boolean,
  item3: Boolean
//   shopNumber:String
});
const countSubTotal = ()=>{
  subTotal.value = (item1Count.value*1500)+(item2Count.value*95000)+(item3Count.value*2000)
}
watch(() => props.item1, (newValue) => {
  item1Count.value = newValue ? 1 : 0;
  countSubTotal();
});

watch(() => props.item2, (newValue) => {
  item2Count.value = newValue ? 1 : 0;
  countSubTotal();
});

watch(() => props.item3, (newValue) => {
  item3Count.value = newValue ? 1 : 0;
  countSubTotal();
});
const item1Count = ref(0)
const item2Count = ref(0)
const item3Count = ref(0)
if(props.item1==true){
  item1Count.value = 1
  countSubTotal()
}
if(props.item2==true){
  item2Count.value = 1
  countSubTotal()
}
if(props.item3==true){
  item3Count.value = 1
  countSubTotal()
}

const subTotal = ref(0)
subTotal.value = (item1Count.value*1500)+(item2Count.value*95000)+(item3Count.value*2000)


console.log("wow")

const emit = defineEmits(["responsecartmodal","cart1close","cart2close","cart3close",'cartclose']);

const addDebt = () => {

};
const addCartFalse=()=>{
  emit("responsecartmodal", false);
}
// console.log(props.shopFlag);

const card1 = ref({
        title: 'Leather Wallet',
        price: '1500',
        imageLink: '../src/assets/wallet1.jpg'
    })
    const card2 = ref({
        title: 'APPLE IPAD PRO',
        price: '95000',
        imageLink: '../src/assets/ipad.jpg'
    })
    const card3 = ref({
        title: 'Table Lamp',
        price: '2000',
        imageLink: '../src/assets/lamp.jpg'
    })

    const item1Response= (number)=>{
      item1Count.value=number
      countSubTotal()
    }
    const item2Response= (number)=>{
      item2Count.value=number
      countSubTotal()
    }
    const item3Response= (number)=>{
      item3Count.value=number
      countSubTotal()
    }


    const cancelCart1 = ()=>{
      emit('cart1close',true)
    }
    const cancelCart2 = ()=>{
      emit('cart2close',true)
    }
    const cancelCart3 = ()=>{
      emit('cart3close',true)
    }

    const paymentProcedure = ()=>{
      const toast = useToast()
        toast.success('Payment Successful!')
        setTimeout(()=>{
          emit('cartclose',true)
        },2000)
        
    }
</script>

<template>
  <div v-if="props.cartflag" class="cartmodalBody">
    <div class="cartModalCenter">
      <button @click="addCartFalse" class="closeButton">X</button>
      <!-- <h2></h2> -->
      <div class="cartModalSpan"></div>

      <div v-if="!props.item1&&!props.item2&&!props.item3" class="emptyCart">
          <img src="../assets/emptycart.png" alt="empty_cart"/>
          <p>Your Cart is Empty</p>
      </div>
      <cartItem v-if="props.item1" :title="card1.title" :price="card1.price" :image="card1.imageLink" @responseCartItem="(number)=>{
        item1Response(number)}" @cancelCart="(msg)=>{
          cancelCart1()
        }" />
      <cartItem v-if="props.item2" :title="card2.title" :price="card2.price" :image="card2.imageLink" @responseCartItem="(number)=>{
        item2Response(number)
      }" @cancelCart="(msg)=>{
          cancelCart2()
        }"/>
      <cartItem v-if="props.item3" :title="card3.title" :price="card3.price" :image="card3.imageLink" @responseCartItem="(number)=>{
        item3Response(number)
      }" @cancelCart="(msg)=>{
          cancelCart3()
        }"/>

      <div v-if="props.item1||props.item2||props.item3" class="cartSubtotal">
        <p>SubTotal : {{ subTotal }} BDT</p>
      </div>
      <!-- <div class="debtModalSpan1"></div> -->
      
    <!-- <button @click="wowClicked"></button> -->
    <div v-if="props.item1||props.item2||props.item3" @click="paymentProcedure" class="paymentButton">
      <p>Proceed to Payment</p>
    </div>
    </div>
  </div>
</template>

<style>
.paymentButton:hover{
  background: rgb(212, 10, 10,1);
}
.paymentButton p{
  color: white;
}
.paymentButton{
  cursor: pointer;
  width: 95%;
  height: 40px;
  background: rgba(212, 10, 10, 0.837);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  position: absolute;
  bottom: 5px;
}
.emptyCart p{
  margin-left: 13px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
.emptyCart img{
  height: 100px;
  width: 100px;
}
.emptyCart{
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cartSubtotal p{
  font-weight: 700;
  font-size: 17px;
  color: rgb(0, 0, 0);
}
.cartSubtotal{
  border-radius: 5px;
  margin-top: 30px;
  padding: 15px;
  padding-bottom: 10px;
  border-style: solid;
  /* border-color: rgb(224, 84, 18); */
  border-bottom-color: rgb(214, 96, 18);
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-width: 5px;
  /* background: linear-gradient(45deg,rgba(51, 135, 184, 0.856),rgb(197, 70, 20)); */
}
.cartModalButton:hover {
  width: 100px;
  height: 38px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border-radius: 5px;
  background: rgba(0, 109, 240, 1);
  /* background: rgba(0, 0, 0, 0.9); */
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.cartModalButton {
  margin-top: 4px;
  width: 100px;
  height: 38px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  background: rgba(0, 109, 240, 0.9);
  /* background: rgba(0, 0, 0, 0.747); */
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.cartModalSpan {
  border-radius: 10px;
  /* margin-top: 10px; */
  margin-bottom: 20px;
  width: 80px;
  height: 4px;
  background: rgba(0, 0, 0, 0.712);
}



.closeButton:hover {
  background: rgb(255, 0, 0);
  color: white;
  /* padding: 5px; */
}

.closeButton {
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


.cartmodalBody {
  z-index: 100000 !important;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cartModalCenter {
  height: 580px;
  width: 600px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
