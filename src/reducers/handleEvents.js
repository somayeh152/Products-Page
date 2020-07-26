import { DELETE_PRODUCT, FAV_PRODUCT, SUBMIT_PRODUCT} from '../actions/index';
import { initialState } from '../store/index';

const appReducer = (state = initialState , action) => {
    switch(action.type){
        case DELETE_PRODUCT:
            return {
              ...state,
              productsList: state.productsList.filter(p => p.id !== action.id)
            };
        case FAV_PRODUCT:
            return{
              ...state,
              productsList: state.productsList.map(p=>{ 
                if( p.id === action.id){
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
              // productsList: [...state.productsList, {id: state.productsList.length, fav:false , ...action.fields}]
              productsList: [...state.productsList, {id: state.productsList[state.productsList.length-1].id+1 , fav:false , ...action.fields}]
            };  
        default: 
            return state || null;
    }
}

export default appReducer;