<script setup lang="ts">
</script>

<template>
  <div class="greetings">
    <h1 class="green" ><spam>Thank you for choosing </spam>Drobbo<spam class="greenSpam">Ponno</spam></h1>
    <h3 style="font-size:18px" >
      A web application that can help any business organization by allowing them to record sell, purchase and expense transactions.
      <!-- <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next? -->
    </h3>
  </div>
</template>

<style scoped>
.greenSpam{
  font-weight: bold; 
  font-size:35px;
  color: rgba(170, 69, 11,.829);
}
.green{
  font-weight: bold; 
  font-size:35px;
  color: rgba(0, 0, 0, 0.829);
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
