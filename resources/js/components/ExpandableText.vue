<template>
     <p v-bind:class="{contracted:contracted}">
         <slot></slot>
     </p>
    <button class="more" v-if="contracted" v-on:click="contracted=false">بیشتر +</button>
    <button class="more" v-if="!contracted" v-on:click="contracted=true">کمتر -</button>
</template>
<script>
export default {
    data(){
        return {
            contracted:true
        }
    }
    
}
</script>
<style>
    .about{
        margin: 2em 0;
    }
    .about p{
        white-space: pre-wrap;
    }
    .about p.contracted{
        height: 250px;
        overflow: hidden;
    }
    .about button.more{
        background: transparent;
        border: 0;
        color:#008489;
        padding: 0;
        font-size: 17px;
        font-weight: bold;
    }
</style>