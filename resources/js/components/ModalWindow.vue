<template>
    <div id="modal" v-bind:class="{show:modalShow}">
        <button v-on:click="modalShow=false" class="modal-close">&times;</button>
       <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            modalShow : false
        }
    },
    watch:{
        modalShow(){
            var className = 'modal-open';
            if(this.modalShow){
                document.body.classList.add(className);
            }else{
                document.body.classList.remove(className);
            }

        }
    },
    methods:{
        escapeKeyListener(evt){
            if(evt.keyCode===27 && this.modalShow)
            {
                this.modalShow = false;
            }
        }
    },
    created : function(){
        document.addEventListener('keyup',this.escapeKeyListener);
    },
    destroyed: function(){
        document.removeEventListener('keyup',this.escapeKeyListener);
    },
}
</script>
<style>
#modal{
    display: none;
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index:2000;
    background-color: rgba(0, 0, 0, 0.50);
}
#modal.show{
    display: block;
}
.modal-content{
    height: 100%;
    max-width: 105vh;
    padding-top:12vh;
    margin:0 auto;
    position: relative;
}
.modal-content img{
    max-width: 100%;
}
body.modal-open{
    overflow:hidden;
    position: fixed;
    width:100%;
}
.modal-close{
    position: absolute;
    right: 0;
    top:0;
    padding: 0px 28px 28px;
    font-size: 4em;
    width:auto;
    height: auto;
    background : transparent;
    border: 0;
    outline:none;
    z-index: 1000;
    font-weight: 100;
    line-height: 1;
}

</style>