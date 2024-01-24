<template>
    <header-image :id="listing.id" @header-clicked="openModal" :image-url="listing.images[0]"></header-image>
    <div class="container">
        <div class="heading">
            <h1>{{listing.title}}</h1>
            <p>{{listing.address}}</p>
        </div>
        <hr>
        <div class="about">
            <h3>توضیحات بیشتر</h3>
            <expandable-text>{{listing.about}}</expandable-text>
        </div>
        <div class="lists">
            <hr>
            <div class="amenities list">
                <feature-list title="امکانات" :items="listing.amenities" v-slot="amenity">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>{{amenity.title}}</span>
                </feature-list> 
            </div>
            <hr>
            <div class="prices list">
                <feature-list title="قیمت ها" :items="listing.prices" v-slot="price">
                        {{price.title}} : <strong>{{price.value}}</strong>
                </feature-list>
            </div>
        </div>
        
    </div>
    <modal-window ref="imagemodal">
        <image-carousel :images="images">
        </image-carousel>
    </modal-window>
</template>
<script>  
    // import sample from './data';
    import {populateAmenitiesAndPrices} from '../helpers';
    import ImageCarousel from './ImageCarousel.vue';
    import ModalWindow from './ModalWindow.vue';
    import HeaderImage from './HeaderImage.vue';
    import FeatureList from './FeatureList.vue';
    import ExpandableText from './ExpandableText.vue';
    export default {
        data(){ 
            return {
                id:null,
                title: null,
                about : null,
                address : null,
                amenities : [],
                prices : [],
                images: []
            }
            // return Object.assign(model,{
            // });
        },
        methods:{
            assignData(data){
                Object.assign(this.$data,populateAmenitiesAndPrices(data));
            },
            openModal(){
                //modalshow = true;
                this.$refs.imagemodal.modalShow = true;
            }
        },
        components:{
            ImageCarousel,
            ModalWindow,
            HeaderImage,
            FeatureList,
            ExpandableText
        },
        computed:{
            listing(){
                
                return populateAmenitiesAndPrices(
                    this.$store.getters.getListing(this.$route.params.listing)
                );
            }
        }
        
    }
</script>