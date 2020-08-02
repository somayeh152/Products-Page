import React from 'react';
import Product from './product';
import './ShowProducts.css';
import { connect } from 'react-redux';
import { handleDeleteAction , handleFavAction , loadProducts} from '../actions/index';

class ShowProducts extends React.Component {

    handleDelete = (isbn) =>{
        const {dispatch} = this.props
        dispatch(handleDeleteAction(isbn));
    }
    
    handleFav = (isbn) => {
        const {dispatch} = this.props
        dispatch(handleFavAction(isbn));
    }

    componentDidMount(){
        if(this.props.productsList.length === 0){
            const {dispatch} = this.props
            dispatch(loadProducts());
        }
    }

    handleSinglePro = proId => {
        this.props.history.push(`/product/${proId}`);
    }

    handleNewPro = () => {
        this.props.history.push('/form');
    }


    render () {
      
      if(this.props.productsList.length === 0){
          return <h3>Loading...</h3>
      }

        return (
          <div className="container-fluid product-page">
            <div id="newProduct">
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={this.handleNewPro}
              >
                محصول جدید
              </button>
            </div>
            <div className="row products">
              {this.props.productsList.map((item, index) => (
                <li key={index}>
                  {item.book_details.map((book, i) => (
                    <li key={i}>
                      <Product
                        index={index}
                        isbn={book.primary_isbn10}
                        title={book.title}
                        author={book.author}
                        publisher={book.publisher}
                        price={book.price}
                        discrp={book.description}
                        fav={item.fav}
                        onDelete={this.handleDelete}
                        onSinglePro={this.handleSinglePro}
                        onFav={this.handleFav}
                      />
                    </li>
                  ))}
                </li>
              ))}
            </div>
          </div>
        );
    }
}


const mapStateToProps = state => ({
    productsList: state.app.productsList
})

export default connect(mapStateToProps)(ShowProducts);