const reducer = (state, action) => {
  if (action.type === "ADD") {
    const product = state.products.find(
      (cartItem) => cartItem.id === action.payload
    );
    product.inCart = true;
    product.count = 1;
    return {
      ...state,
      cart: [...state.cart, product],
    };
  }
  if (action.type === "REMOVE") {
    const product = state.products.find(
      (cartItem) => cartItem.id === action.payload
    );
    product.inCart = false;
    let tempCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = [...state.cart];
    const product = state.products.find(
      (cartItem) => cartItem.id === action.payload
    );
    product.count += 1;
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = [...state.cart];
    const product = state.products.find(
      (cartItem) => cartItem.id === action.payload
    );
    product.count -= 1;
    if (product.count <= 0) {
      product.inCart = false;
      tempCart = tempCart.filter((cartItem) => cartItem.id !== action.payload);
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === "CLEAR_CART") {
    let tempProducts = state.products.map((item) => {
      return { ...item, inCart: false, count: 0 };
    });
    return { ...state, cart: [], products: tempProducts };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, count } = cartItem;
        cartTotal.total += price * count;
        cartTotal.amount += count;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
};

export default reducer;
