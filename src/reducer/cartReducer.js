export const cartReducer = (state = {}, action) => {
    switch (action.type){
        case 'addTocart' : 
            console.log(action.payload);
            return {...state}
        default: 
            return state;
    }
}