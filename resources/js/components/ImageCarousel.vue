<template>
    <div class="image-carousel">
        <img v-bind:src="image">
        <div class="controls">
            <carousel-control dir="right" v-on:change-image="changeImage"></carousel-control>
            <carousel-control dir="left" v-on:change-image="changeImage"></carousel-control>
        </div>
    </div>
    
</template>

<script>
    import CarouselControl from '../components/CarouselControl.vue';
    export default {
        props : ['images'],
        data(){
            return{
                index : 0
            }
        },
        computed:{
            image(){
                return this.images[this.index]
            }
        },
        methods:{
            changeImage(val){
                let newVal = this.index+parseInt(val);
                if(newVal<0)
                {
                    this.index = this.images.length - 1;
                }else if(newVal=== this.images.length)
                {
                    this.index = 0;
                }else{
                    this.index = newVal;
                }
            }
        },
        components:{
           CarouselControl
        }
    }
</script>

<style>
    .image-carousel{
        height: 100%;
        margin-top:-12vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image-carousel img{
        width:90%;
    }
    .image-carousel .controls{
        position:absolute;
        width:100%;
        display: flex;
        justify-content: space-between;
    }
</style>