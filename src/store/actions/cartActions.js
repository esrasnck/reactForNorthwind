export const ADD_TO_CART= "ADD_TO_CART" // magic string  => yazım hatasından kurtulmak için bir yerde sabitlemeye çalışıyoruz.
export const REMOVE_FROM_CART= "REMOVE_FROM_CART" 

export function addToCart(product){

    return{

        type :"ADD_TO_CART",
        payload: product
    }
}

export function removeFromCart(product){

    return{

        type :"REMOVE_FROM_CART",
        payload: product
    }
}


// redux diyor ki bir aksiyon yaptığında bana bir obje gönder. bu objenin içerisinde bu aksiyonun ismi olsun (neyi çalıştırcağımı
// bileyim. => type // payload : aksiyonla beraber gönderdiğini, state'i etkileyecek veri.


// bu fonksiyon, ADD_TO_CART'ın hangi değerleri etkilediğini bulacak.