import axios from "axios"

export const getAllProducts = async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    if (res.status === 200) {
        return res
    } else {
        console.log(res)
    }
}