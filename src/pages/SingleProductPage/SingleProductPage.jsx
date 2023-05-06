import React, {useState, useEffect} from 'react';
import SingleProductCard from '../../components/SingleProductCard/SingleProductCard';
import { useParams } from 'react-router-dom';
import axios  from 'axios';

const getProduct = (id) => {
    return axios.get(`https://whispering-river-87788.herokuapp.com/api/product/${id}`)
}

const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <SingleProductCard
                product={product}
                img={product.img}
                title={product.title}
                descr={product.descr}
                price={product.price}
            />
        </div>
    );
};

export default SingleProductPage;