<template>
    <div class="listing-save" @click.stop="toggleSaved()">
        <i :class="classes"></i>
    </div>
</template>
<script>
export default {
    props:['id'],
    computed:{
        classes(){
            let saved = this.isListingSaved();
            return {
                'fa' : true,
                'fa-lg' : true,
                'fa-heart-o' : !saved,
                'fa-heart' : saved,
            }
        }
    },
    methods:{
        isListingSaved(){
            return this.$store.state.saved.find(saved=>saved===this.id);
        },
        toggleSaved(){
            this.$store.dispatch('toggleSaved',this.id);
        }
    }
    
}
</script>
<style>
    .listing-save{
        position: absolute;
        top:20px;
        right:20px;
        cursor: pointer;
    }
    .listing-save .fa-heart-o{
        color : #ffffff;
    }
    .listing-save .fa-heart{
        color : red;
    }
</style>