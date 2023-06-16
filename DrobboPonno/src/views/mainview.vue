<script setup>
    import navbar from '../components/navbar.vue';
    import shopCard from "../components/itemCard.vue"
    import { ref } from 'vue'
    import router from "../router"
    import bankModal from "../components/bankModal.vue"
    import notificationModal from "../components/notificationModal.vue"

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

    const bankModalFlag = ref(false)
    const bankButtonClicked = (msg)=>{
        // console.log(msg)
        // router.push("/bankinfo");
        bankModalFlag.value = true
    }

    const notificationModalFlag = ref(false)
    const notificationButtonClicked = (msg)=>{
      console.log(msg)
      notificationModalFlag.value = true
    }

    const cartModalFlag = ref(false)
    const cartButtonClicked = (msg)=>{
      console.log(msg)
      cartModalFlag.value = true
    }


</script>

<template>
  <notificationModal :notificationflag="notificationModalFlag" @responsenotificationmodal="()=>{
    notificationModalFlag =false
  }"/>
  <bankModal :debt-flag="bankModalFlag" @response-debt="()=>{bankModalFlag = false}"/>
    <navbar @response="(msg)=>{bankButtonClicked(msg)}" 
      @responseNotification="(msg)=>{notificationButtonClicked(msg)}" 
      @responseCart="(msg)=>{cartButtonClicked(msg)}"/>

    <div class="mainBody">
        <div class="customMargin"></div>
        <div class="mainCardContainer">
            <shopCard :title="card1.title" :price="card1.price" :image="card1.imageLink" />
            <shopCard :title="card2.title" :price="card2.price" :image="card2.imageLink" />
            <shopCard :title="card3.title" :price="card3.price" :image="card3.imageLink" />
        </div>
    </div>
</template>


<style>
.mainCardContainer{
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.customMargin{
    height: 80px;
    /* background: black; */
}
.mainBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(231, 233, 236, 0.726);
    /* background: red; */
}

</style>