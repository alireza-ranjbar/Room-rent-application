<template>
     <div id="saved" class="home-container">
         <h2>موارد ذخیره شده</h2>
        <div class="listing-summaries" v-if="listings.length">
            <listing-summary v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
            class="listing-summary">
            </listing-summary>
        </div>
        <div v-else>هیچ آیتمی یافت نشد</div>
    </div>
</template>
<script>
import ListingSummary from '../components/ListingSummary.vue';
export default {
    computed:{
        listings(){
            return this.$store.state.listing_summaries.filter(
                item => this.$store.state.saved.indexOf(item.id)>-1
            );
        }
    },
    components:{
        ListingSummary
    }
}
</script>
<style>
#saved .listing-summaries{
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    overflow: hidden;
}
#saved .listing-summaries .listing-summary{
    padding-bottom: 30px;
}
.listing-summaries > .listing-summary{
    margin-left:15px;
}
</style>