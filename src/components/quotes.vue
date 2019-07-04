<template>
<div>
    
       <p > {{ quote}}</p>
<!-- <ul>
    <li :key="object.value" v-for="object in quote">
        {{object}}
    </li>
</ul> -->
    </div>

</template>

<script>
export default {
    data(){
        return{
            quote:[],
            i:'',
        }
    },
    methods:{
    increment(){
        this.i=this.i+1;
    },
    delete1(){
  this. quote[i]=0;
       }
    },
props:{
    quote:String,
    i:Number,
    
}
}
</script>

<style scoped>
p{
    font-style: italic;
    font-size:40px;
}
</style>
