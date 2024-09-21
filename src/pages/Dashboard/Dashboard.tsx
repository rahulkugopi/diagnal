import React, { Suspense, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsType } from '../../type/products';
import { fetchProducts } from '../../redux/slice/products';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from '../../components/ErrorBoundary/ErrorBoundary';
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
            <Header data={state} />
            <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={(e) => { }}>
                <Suspense fallback={<div><Loader /></div>}>
                    <ProductsList data={state} />                  
                </Suspense>
            </ErrorBoundary>           
        </div>
    )
}

export default Dashboard