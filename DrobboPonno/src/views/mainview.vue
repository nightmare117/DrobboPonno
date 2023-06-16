<script setup>
    import navbar from '../components/navbar.vue';
    import shopCard from "../components/itemCard.vue"
    import { ref } from 'vue'

    const card1 = ref({
        title: 'Leather Wallet',
        price: '1500',
        imageLink: '../src//assets/wallet1.jpg'
    })
    const card2 = ref({
        title: 'APPLE IPAD PRO',
        price: '95000',
        imageLink: '../src//assets/ipad.jpg'
    })
    const card3 = ref({
        title: 'Table Lamp',
        price: '2000',
        imageLink: '../src//assets/lamp.jpg'
    })
</script>

<template>
    <navbar/>
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
    justify-content: space-around;
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