<script setup>
import { ref } from "vue";
const props = defineProps({
  debtFlag: Boolean
//   shopNumber:String
});

const debtorData = ref({
  name: "",
  number: "",
  amount: "",
  remarks: "",
});

const emit = defineEmits(["responseDebt"]);

const addInfo = () => {

};
const addDebtFalse=()=>{
  emit("responseDebt", false);
}
console.log(props.shopFlag);
</script>

<template>
  <div v-if="props.debtFlag" class="modalBodyBank">
    <div class="bankModalCenter">
      <button @click="addDebtFalse" class="closeButton">X</button>
      <h2>ADD Bank Account</h2>
      <div class="debtModalSpan"></div>
      <!-- <div class="debtModalSpan1"></div> -->
      <div class="inputBox1Debt">
        <label for="inp" class="inp">Account ID</label>
        <input v-model="debtorData.name" type="number" id="inp" placeholder="" />
      </div>
      <div class="inputBox1Debt">
        <label for="inp" class="inp">PIN</label>
        <input v-model="debtorData.amount" name="pincode" type="text" class="pincode" inputmode="numeric" maxlength="4" />
      </div>
      <div class="AddShopModalContainer">
        <button @click="addInfo" class="DebtModalButton">Done</button>
      </div>
    </div>
    <!-- <button @click="wowClicked"></button> -->
  </div>
</template>
<style>
.pincode {
        text-security: disc;
        -webkit-text-security: disc;
        -moz-text-security: disc;
    }
.DebtModalButton:hover {
  width: 100px;
  height: 38px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border-radius: 5px;
  /* background: rgba(0, 109, 240, 1); */
  background-color: #000000;
  /* background: rgba(0, 0, 0, 0.9); */
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.DebtModalButton {
    cursor: pointer;
  margin-top: 4px;
  width: 100px;
  height: 38px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  /* background: rgba(0, 109, 240, 0.9); */
  background-color: #232323;
  /* background: rgba(0, 0, 0, 0.747); */
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.debtModalSpan {
  border-radius: 10px;
  /* margin-top: 10px; */
  width: 80px;
  height: 4px;
  background: rgb(129, 165, 156);
}
.imgFind {
  height: 20px;
  width: 20px;
}

.shopCardButton {
  display: flex;
  align-items: center;
}

.AddShopModalContainer {
  margin: 10px;
  display: flex;
  /* flex-direction: column; */
}

.shopCardButton img {
  margin-right: 8px;
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

textarea {
  width: 100%;
  height: 120px;
  padding: 8px 8px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
.inputBox1Debt {
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.inputBox1Debt input {
  height: 2rem;
}

.inputBox1Debt label {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
}

.modalBodyBank {
  z-index: 100000 !important;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.bankModalCenter {
  margin-top: 60px;
  height: 325px;
  width: 460px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
