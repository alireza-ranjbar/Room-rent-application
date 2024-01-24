<template>
     <div class="header">
        <div class="header-img" 
        :style="headerImageStyle" 
        @click="$emit('header-clicked')">
        </div>
        <ListingSave :id="id"/>
    </div>

</template>
<script>
    import ListingSave from '../components/ListingSave.vue';
    export default{
        props : ['imageUrl','id'],
        computed:{
            headerImageStyle(){
                return {
                'background-image' : `url(${this.imageUrl})`
                };
            }
        },
        components:{
            ListingSave
        }
    }
</script>
<style>
    .header{
        height: 320px;
    }
    .header .header-img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position:50% 50%;
        background-color: #f5f5f5;
        height: 100%;
        cursor: pointer;
        position: relative;
    }
    .header .listing-save{
        top:100px;
    }
</style>