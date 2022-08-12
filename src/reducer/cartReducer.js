export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "addToCart":
      console.log(action.payload);
      const { product, quantity } = action.payload;
      const findId = state.cart.find((elem) => elem.id === product.id);
      if (findId) {
        const deleteProduct = state.cart.filter(
          (elem) => elem.id !== product.id
        );
        return {
          ...state,
          cart: [...deleteProduct, { ...findId, quantity: quantity }],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: quantity,
              image: product.image.desktop,
            },
          ],
        };
      }
    case "decrement":
      const find = state.cart.find((elem) => elem.id === action.payload.id);
      if (find.quantity < 2) {
        return {
          ...state,
          cart: [...state.cart.filter((elem) => elem.id !== find.id)],
        };
      }
      find.quantity -= 1;
      return { ...state, cart: [...state.cart] };

    case "increment":
      const findProduct = state.cart.find(
        (elem) => elem.id === action.payload.id
      );
      findProduct.quantity += 1;

      return { ...state, cart: [...state.cart] };

    case "emptyCart":
      return { ...state, cart: [] };

    default:
      return state;
  }
};
