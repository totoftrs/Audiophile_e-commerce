export const addToCart = (product, quantity) => async (dispatch) => {
    dispatch({type: "addToCart", payload : {product, quantity}})
}
