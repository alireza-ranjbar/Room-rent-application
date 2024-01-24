<template>
     <div id="toolbar">
         <router-link :to="{name:'home'}" class="homepageroute">
        <img src="http://laravelvue.test/img/logo.png" alt="" class="icon">
        <h1>Renters</h1>
        </router-link>
        <ul class="links">
            <li>
                <router-link :to="{name:'saved'}">موارد ذخیره شده</router-link>
            </li>
            <li v-if="$store.state.auth">
                <a @click="logout">خروج</a>
                <form action="/logout"
                method="post"
                style="display:none"
                id="logout">
                    <input type="hidden" name="_token" :value="csrf_token">
                </form>
            </li>
            <li v-else>
                <router-link :to="{name:'login'}">ورود</router-link>
            </li>
        </ul>
    </div>
    <router-view></router-view>
</template>
<script>
export default {
    data(){
        return{
            csrf_token : window.csrf_token
        }
    },
    methods:{
        logout(){
            document.getElementById('logout').submit();
        }
    }
}
</script>
<style>
    #toolbar {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e4e4e4;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }

    #toolbar .icon {
        height: 34px;
        padding: 16px 12px 16px 24px;
        display: inline-block;
    }

    #toolbar h1 {
        color: #4fc08d;
        display: inline-block;
        font-size: 28px;
        margin: 0;
    }
    .homepageroute{
        display:contents;
    }
    #toolbar ul{
        display : flex;
        align-items: center;
        list-style:none;
        padding: 0 24px 0 0;
        margin: 0;
    }
    #toolbar ul li{
        padding: 10px 10px 0 10px;
    }
    #toolbar ul li a{
        text-decoration: none;
        line-height:1;
        color:inherit;
        font-size:13px;
        padding-bottom: 8px;
        letter-spacing:0.5px;
        cursor:pointer;
    }
    #toolbar ul li a:hover{
        border-bottom: 2px solid #484848;
        padding-bottom: 6px;
    }
</style>