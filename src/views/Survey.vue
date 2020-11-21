<template>
  <div class="text-white text-center">
    <h2>Help us understand what type of investor are you.</h2>
  </div>

  <form @submit.prevent='submitSurvey'>
    <div v-if="tab === 0" class="my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <img src="../assets/img/cake.png" class="mx-auto d-block img-fluid mb-4">
      <p class="form-label text-white fs-4">How old are you?</p>
        <div class="row mt-5">
          <div v-for="(option, index) in ageOption" :key="index" class="col-12 mb-3">
            <input type="radio" class="btn-check" name="options" :id="option.name" autocomplete="off" :value="option.value" v-model="age" @click="changeTab(1)">
            <label class="btn btn-lg btn-outline-light" :for="option.name">{{option.name}}</label>
          </div>
        </div>
    </div>

    <div v-if="tab === 1" class="my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <img src="../assets/img/calendar.png" class="mx-auto d-block img-fluid mb-4">
      <p class="form-label text-white fs-4">How long is your trading experience?</p>
        <div class="row mt-5">
          <div v-for="(option, index) in tradingExpOption" :key="index" class="col-12 mb-3">
            <input type="radio" class="btn-check" name="options" :id="option.name" autocomplete="off" :value="option.value" v-model="tradingExp" @click="changeTab(2)">
            <label class="btn btn-lg btn-outline-light" :for="option.name">{{option.name}}</label>
          </div>
        </div>
    </div>

    <div v-if="tab === 2" class="my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <img src="../assets/img/wallet.png" class="mx-auto d-block img-fluid mb-4">
      <p class="form-label text-white fs-4">How much capital do you plan to invest?</p>
        <div class="row mt-5">
          <div v-for="(option) in capitalOption" :key="option.name" class="col-12 mb-3">
            <input type="radio" class="btn-check" name="options" :id="option.name" autocomplete="off" :value="option.value" v-model="capital" @click="changeTab(3)">
            <label class="btn btn-lg btn-outline-light" :for="option.name">{{option.name}}</label>
          </div>
        </div>
    </div>

    <div v-if="tab === 3" class="text-only my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <p class="form-label text-white fs-4">Describe your expectations in the field of investment.</p>
      <textarea v-model="expectations" class="form-control mt-5 mb-4" row="3"></textarea>
      <button type="button" class="btn btn-lg btn-outline-light" @click="changeTab(4)">Next</button>
    </div>

    <div v-if="tab === 4" class="text-only my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <p class="form-label text-white fs-4">How do you determine success in life?</p>
      <textarea v-model="success" class="form-control mt-5 mb-4" row="3"></textarea>
      <button type="button" class="btn btn-lg btn-outline-light" @click="changeTab(5)">Next</button>
    </div>

    <div v-if="tab === 5" class="text-only my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <p class="form-label text-white fs-4">Describe the most memorable experience in your life.</p>
      <textarea v-model="lifeExp" class="form-control mt-5 mb-4" row="3"></textarea>
      <button type="button" class="btn btn-lg btn-outline-light" @click="changeTab(6)">Next</button>
    </div>

    <div v-if="tab === 6" class="text-only my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <p class="form-label text-white fs-4">If you are irritated by somebody, what would you do?</p>
      <textarea v-model="irritated" class="form-control mt-5 mb-4" row="3"></textarea>
      <button type="button" class="btn btn-lg btn-outline-light" @click="changeTab(7)">Next</button>
    </div>

    <div v-if="tab === 7" class="text-only my-5 text-center animate__animated animate__backInLeft" v-bind:class="{'animate__backOutLeft': tabChange}">
      <p class="form-label text-white fs-4">How do you deal with stress in your everyday life?</p>
      <textarea v-model="stress" class="form-control mt-5 mb-4" row="3"></textarea>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>

    <button v-if="tab !== 0" class="bottom text-white animate__animated animate__backInLeft" v-on:click.prevent="changeTab(tab-1)">Back</button>
  </form>

</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      url: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/36eeaf67-af1a-4675-ae1d-0e998b3469ce/v3/profile?version=2020-11-21',
      tab: 0,
      tabChange: false,
      errors:[],
      age:"",
      tradingExp:"",
      capital:"",
      expectations:"",
      success: '',
      lifeExp: '',
      irritated:"",
      stress: '',
      tradingExpOption: [
        {value:"c", name: "< 1 Year"},
        {value:"bc", name: "1 - 5 Years"},
        {value:"ca", name: "> 5 Years"}
      ],
      ageOption: [
        {value:"ba", name: "18 - 30"},
        {value:"b", name: "30 - 45"},
        {value:"a", name: "> 45"}
      ],
      capitalOption: [
        {value:"bc", name: "< RM100,000"},
        {value:"bcd", name: "RM100,000 - RM1,000,000"},
        {value:"ba", name: "> RM1,000,000"}
      ],
    }
  },
  methods: {
    changeTab(tabNum) {
      this.tabChange = true;
      setTimeout(() => {
        this.tab = tabNum;
        this.tabChange = false;
        }, 500);
    },
    async submitSurvey() {

      let result = this.tradingExp+this.age+this.capital
      const data = [this.expectations,this.success,this.lifeExp,this.irritated,this.stress]
      let tempContent = data.map(element=>{
        return {content:element}
      })
      let contentItems=[]
      for(let i=0; i<100; i++){
        contentItems.push(...tempContent)
      }
      const headers = {
        "Authorization": "Basic YXBpa2V5OmV3bGhwWFlpUk9FRVk5UlJMbHAzN3U3aUp4d3Z2VjRkUXJPU1BtRUNoS1cw",
        "Accept": "application/json"
      };
      const response = await axios.post(this.url, {contentItems:contentItems} , {headers});
      let res = response.data;
      let adventurous = res.personality[0].children[0].percentile
      let achievementStriving  = res.personality[1].children[0].percentile
      let cautiousness = res.personality[1].children[1].percentile
      let selfDiscipline = res.personality[1].children[4].percentile
      let activityLevel  = res.personality[2].children[0].percentile
      let excitementSeeking   = res.personality[2].children[0].percentile
      if(adventurous>0.75){
        result=result+'a'
      } else if(adventurous>0.50){
        result=result+'b'
      } else {
        result=result+'c'
      }
      if(achievementStriving>0.75){
        result=result+'a'
      }else{
        result=result+'b'
      }
      if(cautiousness>0.75){
        result=result+'c'
      }
      if(selfDiscipline>0.75){
        result=result+'b'
      }
      if(activityLevel>0.75){
        result=result+'a'
      } else if(adventurous>0.50){
        result=result+'b'
      } else {
        result=result+'c'
      }
      if(excitementSeeking>0.75){
        result=result+'a'
      }
      let occurance = this.countAllCharacters(result)
      let id=0
      if(occurance.a > occurance.b && occurance.a > occurance.c){
        id=3
      } else if (occurance.b > occurance.c){
        id=2
      }else {
        id=1
      }
      this.$router.push({name:'Result', params:{id:id}})
    },
    countAllCharacters(str) {
      let a = str.split("");
      let obj = {};
      a.forEach(function(s){
        obj[s] = (obj[s] || 0) + 1;
      });
      return obj;
    },
  }

}
</script>

<style lang="scss" scoped>
img {
  max-width: 150px;
}

textarea {
  height: 200px;
}

.btn {
  width: 50%;
}

.text-only {
  margin-top: 150px !important;
}

.bottom {
  position: absolute;
  bottom: 10px;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  padding: 10px;
  font-size: 1.1rem;
}
</style>