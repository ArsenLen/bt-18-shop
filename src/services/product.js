import axios from 'axios'

const getProducts = () => {
    return axios.get("https://whispering-river-87788.herokuapp.com/api/products")
}

export default { getProducts } 