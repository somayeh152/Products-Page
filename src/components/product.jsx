import React from 'react';
import './product.css';

class Product extends React.Component {
    render () {
        const {product} = this.props;

        return (
            <div id="product_holder">
                <img src={product.src} alt={product.alt} onClick={() => this.props.onSinglePro(product.id)} />
                <h4>عنوان: <span>{product.title}</span></h4>
                <h4>قیمت: <span>{product.price}</span></h4>
                <h3>علاقه‌مندی<input type="checkbox" checked={product.fav} onChange={() => this.props.onFav(product.id)}/></h3>
                <button type="button" className="del" onClick={() => this.props.onDelete(product.id)}>
                    <span>حذف</span>
                </button>
            </div>
        ); 
    }
}

export default Product;