import React from 'react';
import './product.css';

class Product extends React.Component {
    render () {
        return (
            <div id="product_holder">
                <img src={`http://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`} onClick={() => this.props.onSinglePro(this.props.index)} alt={`${this.props.title}`} />
                <h4>عنوان: <span>{this.props.title}</span></h4>
                <h4>نویسنده: <span>{this.props.author}</span></h4>
                <h4>ناشر: <span>{this.props.publisher}</span></h4>
                <h4>قیمت: <span>{this.props.price}</span></h4>
                <h3>علاقه‌مندی<input type="checkbox" checked={this.props.fav} onChange={() => this.props.onFav(this.props.isbn)}/></h3>
                <button type="button" className="del" onClick={() => this.props.onDelete(this.props.isbn)}>
                    <span>حذف</span>
                </button>
            </div>
        ); 
    }
}

export default Product;

