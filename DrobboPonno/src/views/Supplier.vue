<script setup>
    import navbar from '../components/navbar.vue';
    import shopCard from "../components/itemCard.vue"
    import {onMounted, ref} from 'vue'
    import router from "../router"
    import bankModal from "../components/bankModal.vue"
    import notificationModal from "../components/notificationModal.vue"
    import cartView from '../components/cart.vue'
    import { useToast } from 'vue-toastification';
    import toast from '../services/toast.service';
    import ShopCardSupplier from '../components/ItemCardSupplier.vue'
    import authService from "../services/auth.service";

    const card1 = ref({
        title: 'Leather Wallet',
        price: '1500',
        imageLink: '../src/assets/wallet1.jpg',
        remaining: 10                           //database
    })
    const card2 = ref({
        title: 'APPLE IPAD PRO',
        price: '95000',
        imageLink: '../src/assets/ipad.jpg',
        remaining: 10                              //database
    })
    const card3 = ref({
        title: 'Table Lamp',
        price: '2000',
        imageLink: '../src/assets/lamp.jpg',
        remaining: 10                              //database
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


    const add1Supply =(number)=>{
        card1.value.remaining=number        //database push
    }
    const add2Supply =(number)=>{
        card2.value.remaining=number       //database push
    }
    const add3Supply =(number)=>{
        card3.value.remaining=number        //database push
    }

    const editSupplierFlag = ref(false)
    const editResponseSupplier = ()=>{
        editSupplierFlag.value=true
    }

    const saveChangesSupplier = ()=>{

        // save changes button functionality

      saveStockChanges()
        setTimeout(()=>{
            editSupplierFlag.value = false
            const toast = useToast()
            toast.success('Your changes have been applied.')
        },1500)



    }
    const getItemCounts= ()=>{
      authService.getItemsCount((data)=>{
        card1.value.remaining = data.filter(v=>v.id==1)[0].stock_count;
        card2.value.remaining = data.filter(v=>v.id==2)[0].stock_count;
        card3.value.remaining = data.filter(v=>v.id==3)[0].stock_count;
      },()=>{

      })
    }
    const saveStockChanges= ()=>{
      var itemList = [
        {
          id:1,
          count:card1.value.remaining
        },
        {
          id:2,
          count:card2.value.remaining
        },
        {
          id:3,
          count:card3.value.remaining
        },
      ]
      var data = {
        items:itemList
      }
      authService.saveStock((data)=>{
        toast.success("Successfully Updated The Stock(s)")
      },()=>{

      }, data)
    }
    onMounted(() => {
      getItemCounts();
    });
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
            :is-supplier="true"
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
                                @remainingAdd="(number)=>{add1Supply(number)}"
                                @editResponse="()=>{editResponseSupplier()}"/>
            <ShopCardSupplier :title="card2.title"
                              :price="card2.price"
                              :image="card2.imageLink"
                              :remaining="card2.remaining"
                              @remainingAdd="(number)=>{add2Supply(number)}"
                              @editResponse="()=>{editResponseSupplier()}"/>
            <ShopCardSupplier :title="card3.title"
                             :price="card3.price"
                             :image="card3.imageLink"
                             :remaining="card3.remaining"
                             @remainingAdd="(number)=>{add3Supply(number)}"
                             @editResponse="()=>{editResponseSupplier()}"/>
        </div>
        <div @click="saveChangesSupplier" v-if="editSupplierFlag" class="supplierSaveChanges">
            <p>Save Changes</p>
        </div>
    </div>
</template>


<style>
.supplierSaveChanges p{
    color: white;
}
.supplierSaveChanges:hover{
    background: black;
}
.supplierSaveChanges{
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    z-index: 10;
    border-radius: 10px;
    position: fixed;
    /* height: 100px; */
    padding: 10px;
    /* width: 100px; */
    background: rgba(0, 0, 0, 0.864);
    bottom: 50px;
    right: 60px;
}
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