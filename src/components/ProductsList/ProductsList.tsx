import React, { useEffect, useRef, useState } from 'react'
import styles from './Products.module.scss'
import { ProductListType, ProductsType } from '../../type/products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/products';

function ProductsList() {
  const { filteredItems } = useSelector<any>(state => state.products) as any;
  const dispatch = useDispatch();
  const pageRef = useRef<any>(1);
  const observerRef = useRef<any>('');

  useEffect(() => {
    dispatch(fetchProducts(pageRef.current) as any);
  }, [dispatch]);

  const lastItemRef = (e: any) => {
    if (observerRef.current) observerRef.current.disconnect();    
    observerRef.current = new IntersectionObserver((entries) => {      
      if (entries[0].isIntersecting) {
        pageRef.current += 1;
        dispatch(fetchProducts(pageRef.current) as any);
      }
    });

    if (e) {
      observerRef.current.observe(e);
    }
  }

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
              filteredItems.map((item: ProductListType, index: any) => {
                const isLastItem = index === filteredItems.length - 1;
                return (
                  <div
                    className={styles.items}
                    key={index}
                    ref={isLastItem ? lastItemRef : null}
                  >
                    <div className={styles.imgView}>
                      <img src={process.env.REACT_APP_API_URL + 'images/' + item['poster-image']} />
                    </div>
                    <h2>{item.name}</h2>
                  </div>
                )
              })
            }
          </div>
      }
    </main >
  )
}

export default ProductsList