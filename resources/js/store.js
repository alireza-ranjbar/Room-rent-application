
import axios from 'axios';
import {createStore} from 'vuex';
import router from './router';

axios.defaults.headers.common = {
    'X-Requested-With' : 'XMLHttpRequest',
    'X-CSRF-TOKEN' : window.csrf_token
}

export const store = createStore({
    state(){
        return{
            saved : [],
            listings:[],
            listing_summaries: [],
            auth : false
        }
    },
    mutations:{
        toggleSaved(state,id){
            if(state.auth)
            {
                let index = state.saved.findIndex(saved=> saved===id);
                if(index === -1)
                {
                    state.saved.push(id);
                }else{
                    state.saved.splice(index,1);
                }
            }else{
                router.push('/login');
            }
        },
        addData(state,{route, data}){
            if(data.auth)
            {
                state.auth = data.auth
            }
            if(route=== 'list'){
                state.listings.push(data.listing);
            }else{
                state.listing_summaries = data.listings;
            }
        }
    },
    getters:{
        getListing(state){
            return id => state.listings.find(
                listing => listing.id==id 
            );
        }
    },
    actions:{
        toggleSaved({commit,state},id){
            if(state.auth)
            {
                axios.post('/api/user/toggle_saved',{id}).then(
                    () => commit('toggleSaved',id)
                );
            }else{
                router.push('/login');
            }
        }
    }
});