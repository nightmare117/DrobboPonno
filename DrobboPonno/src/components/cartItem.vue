<script setup>

import {ref} from 'vue'
    const props = defineProps({
        title: String,
        price: String,
        image: String

})

const emit = defineEmits(["responseCartItem",'cancelCart']);

const itemCount = ref(1)
//console.log(props.image)

const decButton = () =>{
    if(itemCount.value>0){
        itemCount.value = itemCount.value-1
        emit("responseCartItem", itemCount.value)
    }
    if(itemCount.value==0){
        emit('cancelCart',true)
    }
}

const incButton = () =>{
    itemCount.value = itemCount.value+1
    emit("responseCartItem", itemCount.value)
}
</script>

<template>
    <div class="cartItemBody">
        <img class="itemCartImage" :src="image" alt="itemIpadPro"/>
        <p class="cartItemTitle">{{ title }}</p>
        <p>{{ price }} BDT</p>
        <div class="incGroup">
            <div class="incBox" @click="decButton">-</div>
            <div class="incBox">{{ itemCount }}</div>
            <div class="incBox" @click="incButton">+</div>
        </div>
    </div>
</template>
<style>
.cartItemTitle{
    font-weight: 500;
}
.incGroup{
    display: flex;
}
.incBox:hover{
    background: rgba(226, 221, 221, 1);
}
.incBox{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    height: 30px;
    width: 30px;
    background: rgba(226, 221, 221, 0.6);
}
.itemCartImage{
    height: 70px;
    width: 70px;
}
.cartItemBody{
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 95%;
    /* margin: 20px; */
    margin-top: 10px;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>