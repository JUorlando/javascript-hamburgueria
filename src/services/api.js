import { api } from "../lib/axios"

export const getProducts = async (onSucess, onError) => {
try{

    const response = await api.get("/products")

    onSucess(response.data)

    console.log(onSucess)


} catch (err){
    
    onError(err)
}
}
