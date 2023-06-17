<script setup>
import { ref } from "vue";
const props = defineProps({
  debtFlag: Boolean //for modal open-close purpose
//   shopNumber:String
});

const hasAccount = ref(true)
const bankAccountBalance = ref(1000000)
const bankAccountId = ref(435354433533)

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
    <div v-if="hasAccount" class="bankModalCenter">
      <div class="bankAccountInfoWrapper">
        <button @click="addDebtFalse" class="closeButton">X</button>
        <div class="bankInfoBody">
          <div class="accountTitle">
            <h1>Account Information</h1>
          </div>
          <div class="accSpan"></div>
          <div class="bankId">
            <p>Bank Id : {{ bankAccountId }}</p>
          </div>
          <div class="bankId">
            <p>Remaining Balance: {{ bankAccountBalance }} BDT</p>
          </div>
          <div class="removeAccount">
            <p>Remove Account</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bankModalCenter">
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
.bankId p{
  font-weight: 500;
}
.accSpan{
  height: 3px;
  width: 60px;
  background: black;
  margin-top: 14px;
  margin-bottom: 40px;
}
.removeAccount:hover{
  background: red;
}
.removeAccount p{
  color: white;
}
.removeAccount{
  cursor: pointer;
  border-radius: 5px;
  position:absolute;
  bottom: 0px;
  right: 40px;
  background: rgba(212, 10, 10, 0.918);
  padding: 7px;
}
.bankInfoBody{
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  position: relative;
}
.bankAccountInfoWrapper{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  /* background: black; */
}
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
