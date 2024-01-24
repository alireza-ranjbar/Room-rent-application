
import {createWebHashHistory,createRouter} from 'vue-router';
import ListingPage from './components/ListingPage.vue';
import HomePage from './components/HomePage.vue';
import SavedPage from './components/SavedPage.vue';
import LoginPage from './components/LoginPage.vue';
import { store } from './store';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/listing/:listing', component : ListingPage, name:'list'},
        {path: '/', component : HomePage,name:'home'},
        {path: '/saved', component : SavedPage,name:'saved'},
        {path: '/login', component : LoginPage,name:'login'}
    ]
}); 

router.beforeEach((to,from,next)=>{
    let serverData = JSON.parse(window.laravelvue_data);
    if(to.name=== 'list'? 
        store.getters.getListing(to.params.listing)
        : store.state.listing_summaries.length >0 
        || to.name==='login' )
    {
        next()
    }
    else if(!serverData.path || to.path !== serverData.path){
        axios.get(`/api${to.path}`).then(({data})=>{
            store.commit('addData',{route:to.name, data:data})
            next();
        })       
    }else{
        store.commit('addData',{route:to.name,data:serverData})
        serverData.saved.forEach(id => store.commit('toggleSaved',id));
        next();
        
    }
});
export default router;