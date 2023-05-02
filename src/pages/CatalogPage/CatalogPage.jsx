import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filter from "../../components/Filter/Filter";
import Info from "../../components/Info/Info";
import Product from "../../components/Product/Product";
import styles from "./catalogpage.module.css";
import serviceApi from "../../services/product";
import ReactPaginate from 'react-paginate';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState("price");
  const [productOffset, setProductOffset] = useState(0); // с какого продукта начинать
  const productsPerPage = 4

  const endOffset = productOffset + productsPerPage; // число, до которого нам нужно показывать продукты
  console.log(`Loading items from ${productOffset} to ${endOffset}`);
  const currentProducts = products.slice(productOffset, endOffset) //  products.slice(0, 4) - [0, 1, 2, 3] -> [4, 5, 6, 7] -> [8, 9, 10, 11] 
  const pageCount = Math.ceil(products.length / productsPerPage); // количество страниц

  const handlePageClick = (event) => {
    const newOffset = event.selected * productsPerPage; // 2 * 4 = 8
    setProductOffset(newOffset);
  };

  useEffect(() => {
    serviceApi
      .getProducts()
      .then((res) => {
        const sortedProducts = res.data.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts); // []
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  // в консоли отобразить "hello", когда пользователь выбирает option
  useEffect(() => {
    if (sorted == "price") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price); // [...products] - копия массива products
      setProducts(sortedProducts);
    }
    if (sorted == "newest") {
      const sortedProducts = [...products].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setProducts(sortedProducts);
    }
  }, [sorted]);
  return (
    <div>
      <Breadcrumbs />
      <Filter setSorted={setSorted} sorted={sorted} />
      <div className={styles["products-wrapper"]}>
        {currentProducts.map((product) => {
          return (
            <Product
              key={product._id}
              img={product.img}
              title={product.title}
              price={product.price}
              date={product.createdAt}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;

// Сделать сортировку от большей цены к меньшей
// Сделать сортировку от нового к старому

// 
