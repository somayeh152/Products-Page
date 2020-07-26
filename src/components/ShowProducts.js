import React from 'react';
import Product from './product';
import './ShowProducts.css';
import { connect } from 'react-redux';
import { handleDeleteAction , handleFavAction } from '../actions/index';

class ShowProducts extends React.Component {

    handleDelete = (productId) =>{
        this.props.handleDeleteAction(productId)
    }

    handleFav = (proId) =>{
        this.props.handleFavAction(proId)
    }

    handleSinglePro = proId => {
        this.props.history.push(`/product/${proId}`);
    }

    handleNewPro = () => {
        this.props.history.push('/form');
    }


    render () {
        return(
            <div className="container-fluid">
            <div id="newProduct">
                <button type="button" className="btn btn-primary m-2" onClick={this.handleNewPro}>
                محصول جدید
                </button>
            </div>
            <div className="row products">
                {this.props.proState.productsList && this.props.proState.productsList.map( product => 
                    <Product 
                        key={product.id}
                        product={product}
                        onDelete={this.handleDelete} 
                        onFav={this.handleFav}
                        onSinglePro={this.handleSinglePro}
                    />
                )}
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => ({
    proState: state.app
})


export default connect(mapStateToProps,{
    handleDeleteAction, handleFavAction
})(ShowProducts);