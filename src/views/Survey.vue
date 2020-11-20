<template>
  <div>
    <h1>The Sorting Hat</h1>
    <p class="lead">The Sorting Hat shall determine what type of investor thou should be.</p>
  </div>
  <form @submit.prevent='submitSurvey'>
  <div class="mb-3">
    <label for="tradingExp" class="form-label">Trading Experience</label>
    <select class="form-select" id="tradingExp" v-model="tradingExp" v-bind:class="{ 'border-danger': tradingExpError }">
      <option :value="options.value" v-for="(options, index) in tradingExpOption" :key="index" required>
        {{ options.name }}
      </option>
    </select>
    <div id="tradingExpError" class="form-text text-danger" v-if="tradingExpError">Please Select Your Trading Experience</div>
  </div>

  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <select class="form-select" id="age" v-model="age" v-bind:class="{ 'border-danger': ageError }">
      <option :value="options.value" v-for="(options, index) in ageOption" :key="index">
        {{ options.name }}
      </option>
    </select>
    <div id="tradingExpError" class="form-text text-danger" v-if="ageError">Please Select Your Age</div>
  </div>

  <div class="mb-3">
    <label for="capital" class="form-label">Capital Available</label>
    <select class="form-select" id="capital" v-model="capital" v-bind:class="{ 'border-danger': capitalError }">
      <option :value="options.value" v-for="(options, index) in capitalOption" :key="index">
        {{ options.name }}
      </option>
    </select>
    <div id="tradingExpError" class="form-text text-danger" v-if="capitalError">Please Select Your Capital Available</div>
  </div>

  <div class="mb-3">
    <label for="purpose" class="form-label">Purpose for Investing</label>
    <select class="form-select" id="purpose" v-model="purpose" v-bind:class="{ 'border-danger': purposeError }">
      <option :value="options.value" v-for="(options, index) in purposeOption" :key="index">
        {{ options.name }}
      </option>
    </select>
    <div id="tradingExpError" class="form-text text-danger" v-if="purposeError">Please Select Your Purpose for Investing</div>
  </div>

  <div class="mb-3">
    <label for="iritated" class="form-label">If you are irritated by somebody, what would you do?</label>
    <select class="form-select" id="iritated" v-model="iritated" v-bind:class="{ 'border-danger': iritatedError }">
      <option :value="options.value" v-for="(options, index) in irritatedOption" :key="index">
        {{ options.name }}
      </option>
    </select>
    <div id="tradingExpError" class="form-text text-danger" v-if="iritatedError">Please Select Your This Field</div>
  </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

</template>

<script>

export default {
  data(){
    return{
      errors:[],
      tradingExp:"",
      age:"",
      capital:"",
      purpose:"",
      iritated:"",
      tradingExpOption: [
        {value:"", name: "Please Select"},
        {value:"c", name: "< 1 Year"},
        {value:"bc", name: "1 - 5 Years"},
        {value:"ca", name: "> 5 Years"}
      ],
      ageOption: [
        {value:"", name: "Please Select"},
        {value:"ba", name: "18 - 30"},
        {value:"b", name: "30 - 45"},
        {value:"a", name: "> 45"}
      ],
      capitalOption: [
        {value:"", name: "Please Select"},
        {value:"bc", name: "< RM100,000"},
        {value:"bc", name: "RM100,000 - RM1,000,000"},
        {value:"ba", name: "> RM1,000,000"}
      ],
      purposeOption: [
        {value:"", name: "Please Select"},
        {value:"bc", name: "Retirement"},
        {value:"c", name: "Wedding"},
        {value:"c", name: "Buy Car, House etc"},
        {value:"a", name: "Short Term Gain"}
      ],
      irritatedOption: [
        {value:"", name: "Please Select"},
        {value:"a", name: "Fight Back"},
        {value:"b", name: "Understand the reason they irritates me"},
        {value:"c", name: "Walk away"}
      ],
    }
  },
  methods: {
    submitSurvey(e) {
      if(this.checkForm(e)){
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
      }
    },

    countAllCharacters(str) {
      let a = str.split("");
      let obj = {};
      a.forEach(function(s){
        obj[s] = (obj[s] || 0) + 1;
      });
      return obj;
    },

    checkForm: function (e) {
      if (this.tradingExp && this.age && this.capital && this.purpose && this.iritated) {
        return true;
      }
      this.errors = [];
      if (!this.tradingExp) {
        this.errors.push(1);
      }
      if (!this.age) {
        this.errors.push(2);
      }
      if (!this.capital) {
        this.errors.push(3);
      }
      if (!this.purpose) {
        this.errors.push(4);
      }
      if (!this.iritated) {
        this.errors.push(5);
      }
      e.preventDefault();
    }
  },
  computed:{
    tradingExpError:function(){
      return this.errors.find(error=>error===1)
    },
    ageError:function(){
      return this.errors.find(error=>error===2)
    },
    capitalError:function(){
      return this.errors.find(error=>error===3)
    },
    purposeError:function(){
      return this.errors.find(error=>error===4)
    },
    iritatedError:function(){
      return this.errors.find(error=>error===5)
    }
  },
  watch: {
    tradingExp: function () {
     const index = this.errors.indexOf(1);
      if (index > -1) {
        this.errors.splice(index, 1);
      }
    },
    age: function () {
     const index = this.errors.indexOf(2);
      if (index > -1) {
        this.errors.splice(index, 1);
      }
    },
    capital: function () {
     const index = this.errors.indexOf(3);
      if (index > -1) {
        this.errors.splice(index, 1);
      }
    },
    purpose: function () {
     const index = this.errors.indexOf(4);
      if (index > -1) {
        this.errors.splice(index, 1);
      }
    },
    iritated: function () {
     const index = this.errors.indexOf(5);
      if (index > -1) {
        this.errors.splice(index, 1);
      }
    }
  },

}
</script>

<style lang="scss" scoped>

</style>