<template>
  <div>
    <h1>The Sorting Hat</h1>
    <p class="lead">The Sorting Hat shall determine what type of investor thou should be.</p>
  </div>
  <form @submit.prevent='submitSurvey'>
  <div class="mb-3">
    <label for="tradingExp" class="form-label">Trading Experience</label>
    <select class="form-select" id="tradingExp" v-model="tradingExp">
      <option :value="options.value" v-for="(options, index) in tradingExpOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <select class="form-select" id="age" v-model="age">
      <option :value="options.value" v-for="(options, index) in ageOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="capital" class="form-label">Capital Available</label>
    <select class="form-select" id="capital" v-model="capital">
      <option :value="options.value" v-for="(options, index) in capitalOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="purpose" class="form-label">Purpose for Investing</label>
    <select class="form-select" id="purpose" v-model="purpose">
      <option :value="options.value" v-for="(options, index) in purposeOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="iritated" class="form-label">If you are irritated by somebody, what would you do?</label>
    <select class="form-select" id="iritated" v-model="iritated">
      <option :value="options.value" v-for="(options, index) in irritatedOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

</template>

<script>

export default {
  data(){
    return{
      tradingExp:0,
      age:0,
      capital:0,
      purpose:0,
      iritated:0,
      tradingExpOption: [
        {value:0, name: "Please Select"},
        {value:"c", name: "< 1 Year"},
        {value:"bc", name: "1 - 5 Years"},
        {value:"ca", name: "> 5 Years"}
      ],
      ageOption: [
        {value:0, name: "Please Select"},
        {value:"ba", name: "18 - 30"},
        {value:"b", name: "30 - 45"},
        {value:"a", name: "> 45"}
      ],
      capitalOption: [
        {value:0, name: "Please Select"},
        {value:"bc", name: "< RM100,000"},
        {value:"bc", name: "RM100,000 - RM1,000,000"},
        {value:"ba", name: "> RM1,000,000"}
      ],
      purposeOption: [
        {value:0, name: "Please Select"},
        {value:"bc", name: "Retirement"},
        {value:"c", name: "Wedding"},
        {value:"c", name: "Buy Car, House etc"},
        {value:"a", name: "Short Term Gain"}
      ],
      irritatedOption: [
        {value:0, name: "Please Select"},
        {value:"a", name: "Fight Back"},
        {value:"b", name: "Understand the reason they irritates me"},
        {value:"c", name: "Walk away"}
      ],
    }
  },
  methods: {
    submitSurvey() {
      let result = this.tradingExp+this.age+this.capital+this.purpose+this.iritated
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
    }
  }


}
</script>

<style>

</style>