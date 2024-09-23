import React, { Suspense, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsType } from '../../type/products';
import { fetchProducts } from '../../redux/slice/products';
import Loader from '../../svgs/Loader';

const ProductsList = React.lazy(() => import("../../components/ProductsList/ProductsList"))

function Dashboard() {
    const dispatch = useDispatch<any>();
    const state = useSelector<any>(state => state.products) as ProductsType;

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className={styles.main}>
            <Suspense fallback={<div><Loader /></div>}>
                <Header />
                <ProductsList />
            </Suspense>
        </div>
    )
}

export default Dashboard