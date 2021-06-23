import React from 'react';
import { inflate } from 'zlib';
import Styles from './Product.module.scss';


interface Product{
    id:number;
    title:string;
    price:number;
    description: string;
    category:string;
    image:string;
}

interface ProductcardProps{
    product: Product;
}

const ProductCard = ({product}:ProductcardProps) => {
    const {id, title, price, description, category, image} = product;

    return (
        <div className={Styles.main} key={id}>
           <div className={Styles.imgBox}>
                <img src={image} alt={title}/>
           </div>
           <div className={Styles.textBox}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{price}</span>
           </div>
        </div>
    )
}

export default ProductCard
