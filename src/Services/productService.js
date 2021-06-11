import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getProductByName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName )
    }
}



// servis isteklerimi buradan yapacam