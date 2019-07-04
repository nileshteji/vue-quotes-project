<template>
  <div class="container">
  <ol>
    <li :key="object.data"  v-for="object in data">
      {{object}}
    </li>
    </ol>
    Quotes Added
    <div class="progress">
      <div
        class="progress-bar"
        :style="{ width: width1 + '%'}"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{ label }}/10</div>
    </div>
    <div class="style-button btn btn-primary">
     
      <button type="button" @click="increase()" class="btn btn-primary">Add Quotes</button>
    
    </div>
   
    <div class="style-button btn btn-primary" style="margin-top:20px">
     
      <button type="button" @click="delete1()" class="btn btn-primary">Delete</button>
    
    </div>

    <div class="container" style="margin-bottom:40px">
      <input v-model.lazy="data[i]" @keyup.enter="increase()" style="height:50px;width:200px">
      </div>
      <div class="container">
        <div class="row" style="margin-bottom:30px" >
       <div 
          :key="object.value" v-for="(object,index) in data"  
          class="col-4" 
          style="cursor:pointer" 
          @click="delete1(index)"
        >
        
      <quotes    :quote="object"/>
         </div>
 
         </div>
          </div>
      </div>
        
</template>
  


<script>
import quotes from "./quotes.vue";
export default {
  components: {
    quotes
  },
  data() {
    return {
      i:0,
      label: 0,
      width1: 1,
      quote_value:'',
      data:[],
      show:0,
      key:'',

      
    };
  },
  methods: {
    increase() {
      if (this.label >= 10) {
        alert("Please Delete some Quotes");
      }
      else {
        this.i+=1;
        this.label = this.label + 1;
        this.width1 = this.width1 + 10;
        //this.show=this.show+1;
      }
    },
     delete1(index){
       this.i=this.i-1;
       this.label=this.label-1;
       this.width1=this.width1-10;
    console.log("called")
    this
    this.data.splice(index,1);
  
  },
  
  },
 
 
};
</script>

<style>
.style-button {
  margin: 20px;
}
</style>
