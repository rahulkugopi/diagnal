import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import { ProductList } from '../../type/products';

function ProductsList(props: any) {

  const { productList } = props.data;
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(productList['content-items'].content);
  }, []);

  return (
    <main className={styles.main}>
      {
        items?.map((item: ProductList, index: any) => (
          <div className={styles.items}>
            <div className={styles.imgView}>
              <img src={process.env.REACT_APP_API_URL + 'images/' + item['poster-image']} />
            </div>
            <h2>{item.name}</h2>
          </div>
        ))
      }
    </main>
  )
}

export default ProductsList