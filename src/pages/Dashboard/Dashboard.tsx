import React, { Suspense, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsType } from '../../type/products';
import { fetchProducts } from '../../redux/slice/products';
import Loader from '../../svgs/Loader';

const ProductsList = React.lazy(() => import("../../components/ProductsList/ProductsList"))

function Dashboard() {
    return (
        <div className={styles.main}>
            <Suspense fallback={
                <div className={styles.loader}>
                    <div className={styles.loaderInner}>
                        <Loader color={'white'} />
                    </div>
                </div>
            }>
                <Header />
                <ProductsList />
            </Suspense>
        </div>
    )
}

export default Dashboard