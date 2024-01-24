
let amenities = new Map();
amenities.set('amenity_wifi',{title : 'Wireless internet',icon: 'fa-wifi'});
amenities.set('amenity_pets_allowed', {title: 'حیوانات خانگی مجاز',icon: 'fa-paw'});
amenities.set('amenity_tv', {title: 'تلویزیون',icon: 'fa-television'});
amenities.set('amenity_kitchen',{title: 'آشپزخانه',icon: 'fa-cutlery'});
amenities.set('amenity_breakfast',{title: 'صبحانه',icon: 'fa-coffee'});
amenities.set('amenity_laptop',{title: 'فضای کاری مناسب برای لپ تاپ',icon: 'fa-laptop'});

let prices = new Map();
prices.set('price_per_night','هرشب');
prices.set('price_extra_people','نفر اضافه');
prices.set('price_weekly_discount','تخفیف هفتگی');
prices.set('price_monthly_discount','تخفیف ماهانه');
let populateAmenitiesAndPrices = function(state){ 
    if(!state) return {};
    var obj = {
        id : state.id,
        title : state.title,
        about : state.about,
        address : state.address,
        amenities : [],
        prices : [],
        images : []
    }
    for(let key in state)
    {
        let arr = key.split('_');
        if(arr[0]==='amenity' && state[key])
        {
            obj.amenities.push(key);
        }
        if(arr[0]==='price'){
            obj.prices.push({title: key, value:state[key]});
        }
        if(arr[0]==='image'){
            obj.images.push(state[key]);
        }
    }
    obj.amenities = obj.amenities.map(item => amenities.get(item));
    obj.prices = obj.prices.map(item =>{
        item.title = prices.get(item.title);
        return item;
    });
    return obj;
}
export{populateAmenitiesAndPrices}

let groupByCountry = function(listings){
    if(!listings) return {};
    return listings.reduce(function(rv,x){
        let key = ['کیش', 'تهران' , 'مازندران'].find(country=>x.address.indexOf(country)>-1);
        if(!rv[key])
        {
            rv[key] = [];
        }
        rv[key].push(x);
        return rv;
    },{});
};
export {groupByCountry}