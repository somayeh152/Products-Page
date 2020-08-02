import React from 'react';
import './singlePro.css';
import { connect } from 'react-redux';
import { handleFavAction, loadProducts } from '../actions/index';

class SinglePro extends React.Component {
    
    handleBack = () =>{
        this.props.history.push('/');
    }    
    
    componentDidMount(){
        if(this.props.proState.length === 0){
            const {dispatch} = this.props
            dispatch(loadProducts());
        }
    }

    onFav = (isbn) => {
        const {dispatch} = this.props
        dispatch(handleFavAction(isbn));
    }

    render() {
        if(this.props.proState.length === 0 ) return <h3>loading...</h3>

        const { match } = this.props;
        const product = this.props.proState[match.params.id].book_details[0];
        const favProduct = this.props.proState[match.params.id].fav;

        return (
        <div className="container-fluid">
            <div className="backBtnHolder">
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleBack}>بازگشت</button>
            </div>
            <div className="row" id="singlePro_holder">
                <div className="col-md-4 col-sm-12 imgHolder">
                    <img src={`http://covers.openlibrary.org/b/isbn/${product.primary_isbn10}-M.jpg`}  alt={`${product.title}`} />
                </div>
                <div className="col-md-8 col-sm-12">
                    <h4>عنوان: <span>{product.title}</span></h4>
                    <h4>نویسنده: <span>{product.author}</span></h4>
                    <h4>ناشر: <span>{product.publisher}</span></h4>
                    <h4>قیمت: <span>{product.price}</span></h4>
                    <h4>شابک: <span>{product.primary_isbn10}</span></h4>
                    <h4>توضیحات: <p>{product.discrp}</p></h4>
                    <h3>علاقه‌مندی<input type="checkbox"  checked={favProduct} onChange={() => this.onFav(product.primary_isbn10)} /></h3>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state =>({
    proState: state.app.productsList
})

export default connect(mapStateToProps)(SinglePro);