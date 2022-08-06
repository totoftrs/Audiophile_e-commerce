export const cartReducer = (state = {cart:[]}, action) => {
    switch (action.type){
        case 'addToCart' : 
            console.log(action.payload);
            const { product, quantity } = action.payload
            console.log(product)
            const findId = state.find(elem => elem.id == product.id)
            if(findId){
                const deleteProduct = state.filter(elem => elem.id !== product.id)
                return [...deleteProduct, {...findId, quantity : quantity}]
            }else{
                return [...state, {id: product.id ,name: product.name, price: product.price, quantity : quantity, image: product.image.desktop}]
            }
        default:
            return state;
    }
}