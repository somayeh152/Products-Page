import React  from 'react';
import './form.css';
import { connect } from 'react-redux';
import {handleSubmitAction} from '../actions/index';

class Form extends React.Component {
    state={
        title: '',
        author: '',
        publisher: '',
        isbn: '',
        price: '',
        // src: '',
        imgUrl: '',
        discrp: '',
        fav: true
    }

    handleChange = e =>{   
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleBack = () =>{
        this.props.history.push('/');
    }

    handleSubmit = proFields =>{
        this.props.handleSubmitAction(proFields);
        this.props.history.push('/');
    }

    render () {
        return (
             <div className="container-fluid">
                 <div className="backBtnHolder">
                    <button className="btn btn-primary btn-sm m-2" onClick={this.handleBack}>بازگشت</button>
                 </div>
                 <form id="newProductForm" className="form">
                        <div className="form-row">
                            <div className="form-group col-md-4 col-sm-12">
                            <input className="form-control" 
                                id="inputTitle"
                                type="text"
                                placeholder="عنوان محصول" 
                                name="title"
                                value={this.state.title} 
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                            <div className="form-group col-md-4 col-sm-12">
                            <input className="form-control"
                                id="inputAuthor" 
                                type="text"
                                placeholder="نویسنده کتاب" 
                                name="author"
                                value={this.state.author} 
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4 col-sm-12">
                            <input className="form-control"
                                id="inputPublisher" 
                                type="text"
                                placeholder="ناشر کتاب" 
                                name="publisher"
                                value={this.state.publisher} 
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                            <div className="form-group col-md-4 col-sm-12">
                            <input className="form-control"
                                id="inputPrice" 
                                type="number"
                                placeholder="قیمت کتاب" 
                                name="price"
                                value={this.state.price} 
                                onChange={e => this.handleChange(e)}
                            />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4 col-sm-12">
                                <input className="form-control" 
                                    id="inputIsbn" 
                                    type="number" 
                                    placeholder="شابک" 
                                    name="isbn"
                                    value={this.state.isbn}
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>
                            <div className="form-group col-md-4 col-sm-12">
                                <input className="form-control" 
                                    id="inputPhoto" 
                                    type="text" 
                                    placeholder="آدرس تصویر" 
                                    name="imgUrl"
                                    value={this.state.imgUrl}
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-8 col-sm-12">
                                <textarea className="form-control" 
                                    id="inputDiscription" rows="3"
                                    placeholder="توضیحات محصول" 
                                    name="discrp"
                                    value={this.state.discrp}
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit(this.state)} >
                            افزودن محصول    
                        </button> 
                    </form> 
             </div>
             
        );
    }
}                


const mapStateToProps = state => ({
    fields: state.app.proFields
})

export default connect(mapStateToProps, {handleSubmitAction})(Form);