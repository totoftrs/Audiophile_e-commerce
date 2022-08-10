export const decrement = (params) => (dispatch) => {
    dispatch({type: "decrement", payload : params})
}