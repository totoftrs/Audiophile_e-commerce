export const cartReducer = (state = {cart:[]}, action) => {
    switch (action.type){
        case 'addToCart' : 
            console.log(action.payload);
            const { product, quantity } = action.payload
            console.log(product.id)
            
            if(product.id){
                return {id: product.id, name: product.image, price: product.price, quantity : quantity}
            }else{
                return [...state, {id: product.id, name: product.image, price: product.price, quantity : quantity}]
            }
        default:
            return state;
    }
}