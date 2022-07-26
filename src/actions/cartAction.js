export const addToCart = (product, quantity) => (dispatch) => {
    dispatch({type: "addToCart", payload : {product, quantity}})
}
