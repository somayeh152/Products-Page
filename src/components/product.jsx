import React from 'react';
import './product.css';

class Product extends React.Component {
    render () {
        const {book} = this.props;

        return (
            <div id="product_holder">
                <img src={`http://covers.openlibrary.org/b/isbn/${book.primary_isbn10}-M.jpg`} onClick={() => this.props.onSinglePro(this.props.index)} alt={`${book.title}`} />
                <h4>عنوان: <span>{book.title}</span></h4>
                <h4>نویسنده: <span>{book.author}</span></h4>
                <h4>ناشر: <span>{book.publisher}</span></h4>
                <h4>قیمت: <span>{book.price}</span></h4>
                <h3>علاقه‌مندی<input type="checkbox" checked={this.props.fav} onChange={() => this.props.onFav(book.primary_isbn10)}/></h3>
                <button type="button" className="del" onClick={() => this.props.onDelete(book.primary_isbn10)}>
                    <span>حذف</span>
                </button>
            </div>
        ); 
    }
}


export default Product;

