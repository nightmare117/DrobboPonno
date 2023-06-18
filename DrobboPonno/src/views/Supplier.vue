<script setup>
    import navbar from '../components/navbar.vue';
    import shopCard from "../components/itemCard.vue"
    import { ref } from 'vue'
    import router from "../router"
    import bankModal from "../components/bankModal.vue"
    import notificationModal from "../components/notificationModal.vue"
    import cartView from '../components/cart.vue'
    import { useToast } from 'vue-toastification';
    import toast from '../services/toast.service';
    import ShopCardSupplier from '../components/ItemCardSupplier.vue'

    const card1 = ref({
        title: 'Leather Wallet',
        price: '1500',
        imageLink: '../src/assets/wallet1.jpg',
        remaining: 100                           //database
    })
    const card2 = ref({
        title: 'APPLE IPAD PRO',
        price: '95000',
        imageLink: '../src/assets/ipad.jpg',
        remaining: 31                              //database
    })
    const card3 = ref({
        title: 'Table Lamp',
        price: '2000',
        imageLink: '../src/assets/lamp.jpg',
        remaining: 36                              //database
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

    const itemCart1Flag = ref(false)
    const itemCart2Flag = ref(false)
    const itemCart3Flag = ref(false)
    const addItem1 =()=>{
        // console.log('item1')
        itemCart1Flag.value=true
        const toast = useToast()
        toast.success('Leather wallet has been successfully added to the cart.')
        // console.log(itemCartFlag.value.item1)
    }
    const addItem2 =()=>{
        itemCart2Flag.value=true
        const toast = useToast()
        toast.success('Apple Ipad Pro has been successfully added to the cart.')
    }
    const addItem3 =()=>{
        // console.log('item3')
        itemCart3Flag.value=true
        const toast = useToast()
        toast.success('Table Lamp has been successfully added to the cart.')
    }
    const cartClose = ()=>{
        cartModalFlag.value=false
            itemCart1Flag.value=false
            itemCart2Flag.value=false
            itemCart3Flag.value=false
    }

    const add1Supply =(number)=>{
        card1.value.remaining=number        //database push
    }
    const add2Supply =(number)=>{
        card2.value.remaining=number       //database push
    }
    const add3Supply =(number)=>{
        card3.value.remaining=number        //database push
    }
</script>

<template>
    <cartView :item1="itemCart1Flag"
              :item2="itemCart2Flag"
              :item3="itemCart3Flag" :cartflag="cartModalFlag" @responsecartmodal="() =>{
        cartModalFlag=false
    }"
        @cart1close="()=>{
            itemCart1Flag=false
        }"
        @cart2close="()=>{
            itemCart2Flag=false
        }"
        @cart3close="()=>{
            itemCart3Flag=false
        }"
        @cartclose="()=>{
            cartClose()
        }"
    />
  <notificationModal :notificationflag="notificationModalFlag" @responsenotificationmodal="()=>{
    notificationModalFlag =false
  }"/>
  <bankModal :debt-flag="bankModalFlag" @response-debt="()=>{bankModalFlag = false}"/>
    <navbar 
            @response="(msg)=>{bankButtonClicked(msg)}" 
            @responseNotification="(msg)=>{notificationButtonClicked(msg)}" 
            @responseCart="(msg)=>{cartButtonClicked(msg)}"/>

    <div class="mainBody">
        <div class="customMargin"></div>
        <div class="mainCardContainer">
            <ShopCardSupplier :title="card1.title" 
                                :price="card1.price" 
                                :image="card1.imageLink" 
                                :remaining="card1.remaining" 
                                @remainingAdd="(number)=>{add1Supply(number)}"/>
            <ShopCardSupplier :title="card2.title" 
                              :price="card2.price" 
                              :image="card2.imageLink" 
                              :remaining="card2.remaining" 
                              @remainingAdd="(number)=>{add2Supply(number)}"/>
            <ShopCardSupplier :title="card3.title" 
                             :price="card3.price" 
                             :image="card3.imageLink" 
                             :remaining="card3.remaining" 
                             @remainingAdd="(number)=>{add3Supply(number)}"/>
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