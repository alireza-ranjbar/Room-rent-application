<template>
    <div class="listing-summary-group">
        <h1>مکان ها در {{country}}</h1>
        <div class="listing-carousel">
            <div class="controls">
                <CarouselControl dir="right" @change-image="change" :style="rightArrowStyle"/>
                <CarouselControl dir="left" @change-image="change" :style="leftArrowStyle"/>
            </div>
            <div class="listing-summaries-wrapper">
                <div class="listing-summaries" :style="style">
                    <listing-summary v-for="listing in listings"
                    :key="listing.id"
                    :listing="listing"
                    class="listing-summary">
                    </listing-summary>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ListingSummary from '../components/ListingSummary.vue';
import CarouselControl from '../components/CarouselControl.vue';
const rowSize = 3;
const listingSummaryWidth = 365;
export default {
    props : ['listings','country'],
    data(){
        return {
            offset : 0
        }
    },
    components:{
        ListingSummary,
        CarouselControl
    },
    computed:{
        style(){
            return {transform: `translateX(${this.offset*(listingSummaryWidth)}px)`}
        },
        leftArrowStyle(){
            return{
                visibility : (
                    (this.offset < (this.listings.length-rowSize))? 'visible' : 'hidden'
                )
            }
        },
        rightArrowStyle(){
             return{
                visibility : (
                    (this.offset >0)? 'visible' : 'hidden'
                )
            }

        }
    },
    methods:{
        change(val){
            let newVal = this.offset + parseInt(-val);
            if(newVal >=0 && newVal<= this.listings.length-rowSize)
            {
                this.offset = newVal;
            }

        }
    }
}
</script>
<style>
.listing-summary-group{
    padding-bottom: 20px;
}
.listing-summaries{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition : transform .5s;

}
.listing-summaries > .listing-summary{
    margin-left: 15px;
}
.listing-summaries > .listing-summary:last-child{
    margin-left:0px;
}
.listing-carousel{
    position: relative;
}
.listing-carousel .controls{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: calc(50% - 45px);
    left: -45px;
    width: calc(100% + 90px);
}
.listing-carousel .controls .carousel-control{
    color:#c5c5c5;
    font-size: 1.5rem;
    cursor: pointer;
}
.listing-summaries-wrapper{
    overflow:hidden;
}
</style>