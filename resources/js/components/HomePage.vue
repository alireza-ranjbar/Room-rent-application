<template>
    <div class="home-container">
        <ListingSummaryGroup v-for="(group, country) in listing_groups" 
        :key="country"
        :country="country"
        :listings="group"/>
    </div>
</template>
<script>
    import {groupByCountry} from '../helpers.js';
    import ListingSummaryGroup from '../components/ListingSummaryGroup.vue';

    
    export default{
        components:{
            ListingSummaryGroup
        },
        computed:{
            listing_groups(){
                return groupByCountry(this.$store.state.listing_summaries);
            }
        }
    }
</script>
<style>
.home-container{
    margin: 0 auto;
    padding: 0 25px;
}
@media(min-width:1131px){
    .home-container{
        width:1080px;
    }
}

</style>