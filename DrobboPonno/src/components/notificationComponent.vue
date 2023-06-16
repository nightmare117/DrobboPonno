<script setup>
import { ref } from 'vue'

    const props = defineProps({
        product1quantity: String,
        product2quantity: String,
        product3quantity: String,
        pstatus:Boolean})

    const str = ref('Your Payment is Not Successful, maybe insufficient balance!')
    let x = `Your payment is successful for ${props.product1quantity} Leather Wallets, ${props.product2quantity} Apple Ipad Pro, ${props.product3quantity} Table Lamp`
    if(props.pstatus == true){
        str.value = x;
    }
</script>

<template>
    <div class="notificationComponent">
        <p>{{ str }}</p>
    </div>
</template>

<style>
.notificationComponent p{
    width: 100%;
}
.notificationComponent{
    margin: 10px;
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