import { DELETE_PRODUCT, FAV_PRODUCT, SUBMIT_PRODUCT , FETCH_PRODUCTS_SUCCESS } from '../actions/index';

const initialState = {
  productsList:[],
  proFields: {}
}

const appReducer = (state = initialState , action) => {
    switch(action.type){

        case FETCH_PRODUCTS_SUCCESS:
            return {
              ...state,
              productsList: action.productlist.map( p => ({ ...p, fav: false }) )
            }

        case DELETE_PRODUCT:
            return {
              ...state,
              productsList: state.productsList.filter(p=>p.book_details[0].primary_isbn10 !== action.isbn)
            };

        case FAV_PRODUCT:
            return{
              ...state,
              productsList: state.productsList.map(p=>{ 
                if( p.book_details[0].primary_isbn10 === action.isbn){
                  return {...p , fav: !p.fav};
                }
                else{
                  return {...p}
                }
              })
            };

        case SUBMIT_PRODUCT:
            return{
              ...state,
              productsList: [
                ...state.productsList,
                {
                  fav: false,
                  book_details: [{
                    title: action.fields.title,
                    author: action.fields.author,
                    publisher: action.fields.publisher,
                    primary_isbn10: action.fields.isbn,
                    price: action.fields.price,
                    // src: action.fields.src,
                    imgUrl: action.fields.imgUrl,
                    description: action.fields.discrp
                  }]

                }
              ]
            };  
        default: 
            return state;
    }
}

export default appReducer;