export const DELETE_PRODUCT = 'HANDLE_DELETE';
export const FAV_PRODUCT = 'HANDLE_FAV';
export const SUBMIT_PRODUCT = 'HANDLE_SUBMIT';
export const FETCH_PRODUCTS_SUCCESS = 'HANDLE_PRODUCTS_SUCCESS';

export const handleProductSuccess = productlist => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        productlist: productlist
    }

}

export const handleDeleteAction = isbn => ({
    type: DELETE_PRODUCT,
    isbn: isbn 
});

export const handleFavAction = isbn => ({
    type: FAV_PRODUCT,
    isbn: isbn 
});

export const handleSubmitAction = proFields => ({
    type: SUBMIT_PRODUCT,
    fields: proFields
});



export function loadProducts(){
    return dispatch => {
        return fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=trade-fiction-paperback&api-key=GJm4Q3RTcFkuCHie1pyqEswO1dVG0x3p`)
        .then(response => {
            console.log(response)
            return response.json()
        }).then(
            res => dispatch(handleProductSuccess(res.results))
        )
        .catch(e => console.log(e));
    }
}