<script setup>
import {ref} from 'vue'
    const props = defineProps({
        title: String,
        price: String,
        image: String,
        remaining: Number
})

// Shop Card Component
//console.log(props.image)
const emit = defineEmits(["response_add_cart","remainingAdd"]);
const addItem = ()=>{
    emit('response_add_cart',true)
}
const decSupply = ()=>{
    let x = props.remaining
    x = x-1
    if(x>=0){
        emit('remainingAdd',x)
    }
}

const incSupply = ()=>{
    let y = props.remaining
    y = y+1
    emit('remainingAdd',y)
}
</script>

<template>
    <div class="shopCardContainer">
        <!-- hello world -->
        <img class="itemCardImage" :src="image" alt="itemIpadPro"/>
        <div class="titleBox">
            <h4 style="color: rgba(170, 69, 11,.9);">{{ title }}</h4>
            <div class="supplierItemsWrapper">
                <div @click="decSupply" class="supplierButtonBox">
                    <h5>-</h5>
                </div>
                <p>( {{ remaining }} items remaining )</p>
                <div @click="incSupply" class="supplierButtonBox">
                    <h5>+</h5>
                </div>
            </div>
            
        </div>
        <div class="titleBoxNextSupplier">
            
            <h4>{{ price }} BDT</h4>
            
        </div>
    </div>
    
</template>

<style>
.supplierButtonBox{
    display: flex;
    justify-content: center;
    align-items: center;
}
.supplierItemsWrapper{
    display: flex;
    align-items: center;
}
.supplierButtonBox:hover{
    background: rgb(200, 197, 161);
}
.supplierButtonBox{
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    height: 20px;
    width: 20px;
    background: rgba(200, 197, 161, 0.782);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.addCartButton:hover{
    /* margin-top: 10px; */
    background: black;
}
.addCartButton p{
    color: white;
}
.addCartButton{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 40px;
    width: 100%;
    margin-top: 5px;
    /* margin-left: 3%; */
    /* margin-right: 3%; */
    background: rgba(0, 0, 0, 0.856);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.titleBox h4{
    font-weight: 500;
}
.titleBoxNextSupplier h4{
    font-weight: 400;
    color: white;
}
.titleBox p{
    font-size: 10px;
}
.titleBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 60px;
    width: 100%;
    margin-top: 5px;
    /* margin-left: 3%; */
    /* margin-right: 3%; */
    background: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.titleBoxNextSupplier{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 40px;
    width: 100%;
    margin-top: 5px;
    /* margin-left: 3%; */
    /* margin-right: 3%; */
    background: rgba(0, 0, 0, 0.911);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.itemCardImage{
    width: 100%;
    height: 220px;
    /* border-image-repeat: no-repeat; */
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px; */
    /* border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
}
.shopCardContainer{
    display: flex;
    flex-direction: column;
    height: auto;
    width: 20%;
    min-width: 300px;
    /* background: rgba(0, 0, 0, 0.075); */
    /* background: rgb(222, 30, 30); */
    /* background: transparent; */
    margin: 30px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    border-radius: 10px;
}
</style>