export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "addToCart":
      console.log(action.payload);
      const { product, quantity } = action.payload;
      const findId = state.find((elem) => elem.id === product.id);
      if (findId) {
        const deleteProduct = state.filter((elem) => elem.id !== product.id);
        return [...deleteProduct, { ...findId, quantity: quantity }];
      } else {
        return [
          ...state,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image.desktop,
          },
        ];
      }
    case "decrement":
      const find = state.find((elem) => elem.id === action.payload.id);
      if(find.quantity <= 1){
        find.quantity = 1
      }
      find.quantity -= 1;
      return [...state];

    case "increment":
      const findProduct = state.find((elem) => elem.id === action.payload.id);
      findProduct.quantity += 1;
      return [...state];

      case "emptyCart":
      return [];

    default:
      return state;
  }
};
