// tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

// tek bir yerde toplayım. uygulamaya onu ekleyim dediğim yer.
// redux'la gelen fonksiyon : combine reducer

const rootReducer =combineReducers({
    cart : cartReducer,
   //  user:userReducer => gibi
})

export default rootReducer; // default olarak çıkarmak istersem böyle yaparım.

// bundan sonra yapılacaklar: 

// 1) actionlar yazmak.
// 2) initial value varsa onu yazmak
// 3) reducer'ı yazmak
// buraya eklemek

// son olarak da mağazayı oluşturcam