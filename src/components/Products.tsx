import React, {useEffect, useState} from 'react';
import Styles from './Products.module.scss';
import ProductCard from './product-card/ProductCard';
import Container from './utils/container/Container';
import ResponsiveRow from './utils/responsive-row/ResponsiveRow';
import { fetchProduct } from '../request'
import FilterPanel from './utils/filter-panel/FilterPanel';

const Products = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    const [prdCategory, setCategory] = useState<Array<any>>([]);
    const [filterValue, setfilterValue] = useState('');

    useEffect(() =>{
        const filtered = products.filter((product) => product.category == filterValue);

        fetchProduct("products").then(products =>{
            setCategory(products)
            
            if(filtered.length < 1){
                setProducts(products);
            }else{
                setProducts(filtered);
            }
        }, error => {
            console.log(error.message);
        })
        
    },[products])

 
    const uniqCategory:any = [];

    for(let i of prdCategory){
        if(uniqCategory.indexOf(i.category) === -1){
            uniqCategory.push(i.category);
        }
    }

    const handelFilter = (e:string) =>{
        setfilterValue(e);
    }
    
    return (
        <>
        <FilterPanel
            categoryes={uniqCategory}
            handelFilter={handelFilter}
            filterValue={filterValue}
        />
            <section className={Styles.productSection}>
                <Container>
                    <ResponsiveRow responsiveClass={Styles.productRow}>
                        <>
                            {products.map(product =>(
                                <ProductCard
                                product={product}
                                />
                            ))}
                        </>
                    </ResponsiveRow>
                </Container>
            </section>
        </>
    )
}

export default Products
