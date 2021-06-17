import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
  // x:1,
  // y:2 // birden çok eleman olabilir burada. o yüzden aşağıda cartItems'ı ayırdım
};

// gönderdiğim aksiyona göre sepetin son halini tuttuğumuz yer.
// state=> başlangıç değerim

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_TO_CART:
      let product = state.cartItems.find(c=> c.product.id === payload.id)

      if (product) {
          product.quantity ++; // bunu yapınca bir bir artar quantity. ama referanslar değişmez. yani sepeti güncellemez. bu yüzden refransı
          return{             // güncellemek gerek. o yüzden spread operatörü gerekli
              
            ...state
              // yepyeni bir cart objesini döndürmüş oluyorsun. newliyorsun bir nevi.
          }
      } else {

        return {  // sepette eleman yoksa, yepyeni bir obje oluştur. o zaman mevcut cartItems a yeni bir eleman ekleyip, yeni array yapacam.

            ...state,  // cartItems'ı ayırdım. sonra yeni bir array oluşturdum
            cartItems:[...state.cartItems,{quantity:1, product:payload}]   // sadece bir elamanı değiştirmek istediğim için bu hareketi yapıyorum
                    // [state'deki cartItems'ı spread et dedim]
                    // payload'lada yenisi ekledim.

        }
          
      }
 
    case REMOVE_FROM_CART:
       return{
           ...state,
           cartItems:state.cartItems.filter(c=> c.product.id===payload.id) // eşit olanları filtreliyor. filter a yeni bir array oluştur. filtreme göre diyorum.

       }

    default:
      return state;  // state'in kendisini döndür.
  }
}

// gönderilecek olan type a göre state'i değiştirmek gerekiyor. redux bunu bir şekilde kendi mimarisinde implement ediyor

// mutebility : sepet elemanlarının değiştiğini redux, (bu hooklarda da geçerli) eğer referansı değiştiyse,
// ben sepete yeni eleman eklendi yada silindi olarak anlarım diyor. sepetin değiştiğini anlarım diyor. o yüzden
// sen benim abonelerimi bilgilendirmen için, ilgi state'in referansını değiştir diyor.

// bu yüzden benim referansı değiştirmem gerek. o yüzden if blogu is coming
