import axios from "axios";


export const ProductService={
    url:"http://localhost:9096",
    getAllProducts:function(){
    let productUrl=`${this.url}/findAllproducts`;
    return axios.get(productUrl);
    },

    getProduct:function(id){
        let productUrl=`${this.url}/finById/${id}`;
        return axios.get(productUrl);
    },
    addProduct: async function(product) {
        console.log(product);
        try {
            const productUrl = `${this.url}/addProducts`;
            const response = await axios.post(productUrl, product, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response; // Return the response data
        } catch (error) {
            console.error("Error adding product:", error);
            throw error; // Rethrow or handle the error
        }
    },
    updateProduct:function(product,productid){
        let productUrl=`${this.url}/updateProducts/${productid}`;
        console.log(productUrl)
        return axios.put(productUrl,product,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    deleteProduct:function(productid){
        let productUrl=`${this.url}/deleteProduct/${productid}`;
        return axios.delete(productUrl);
    }

}
