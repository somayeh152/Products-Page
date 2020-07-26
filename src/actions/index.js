export const DELETE_PRODUCT = 'HANDLE_DELETE';
export const FAV_PRODUCT = 'HANDLE_FAV';
export const SUBMIT_PRODUCT = 'HANDLE_SUBMIT';

export const handleDeleteAction = productId => ({
    type: DELETE_PRODUCT,
    id: productId
});

export const handleFavAction = proId => ({
    type: FAV_PRODUCT,
    id: proId
});

export const handleSubmitAction = proFields => ({
    type: SUBMIT_PRODUCT,
    fields: proFields
});