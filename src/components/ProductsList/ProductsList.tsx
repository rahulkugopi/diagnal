import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import { ProductListType, ProductsType } from '../../type/products';
import { useSelector } from 'react-redux';

function ProductsList() {
  const { filteredItems } = useSelector<any>(state => state.products) as any;


  return (
    <main className={styles.main}>
      {
        filteredItems.length == 0 ?
          <div className={styles.noData}>
            <p>No data found!</p>
          </div>
          :
          <div className={styles.mainInner}>
            {
              filteredItems.map((item: ProductListType, index: any) => (
                <div className={styles.items} key={index}>
                  <div className={styles.imgView}>
                    <img src={process.env.REACT_APP_API_URL + 'images/' + item['poster-image']} />
                  </div>
                  <h2>{item.name}</h2>
                </div>
              ))
            }
          </div>
      }
    </main>
  )
}

export default ProductsList