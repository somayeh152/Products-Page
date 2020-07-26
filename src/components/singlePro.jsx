import React from 'react';
import './singlePro.css';
import { connect } from 'react-redux';
import { handleFavAction } from '../actions/index';

class SinglePro extends React.Component {
    
    handleBack = () =>{
        this.props.history.push('/');
    }
    
    handleFav = (proId) => {
        this.props.handleFavAction(proId)
    }

    render() {
        const { match } = this.props;
        const product = this.props.proState.productsList[match.params.id];

        return (
        <div className="container-fluid">
            <div className="backBtnHolder">
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleBack}>بازگشت</button>
            </div>
            <div className="row" id="singlePro_holder">
                <div className="col-md-4 col-sm-12 imgHolder">
                    <img src={product.src} alt={product.alt} />
                </div>
                <div className="col-md-8 col-sm-12">
                    <h4>عنوان: <span>{product.title}</span></h4>
                    <h4>قیمت: <span>{product.price}</span></h4>
                    <h4>توضیحات: <p>{product.discrp}</p></h4>
                    <h3>علاقه‌مندی<input type="checkbox" checked={product.fav} onChange={()=> this.handleFav(product.id)} /></h3>
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = state =>({
    proState: state.app
})

export default connect(mapStateToProps, {handleFavAction})(SinglePro);