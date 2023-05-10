import { createSlice } from "@reduxjs/toolkit";

// const getItemFromLS = () => {
//   let list = localStorage.getItem("cartList")||"";
//   if (list){
//     return JSON.parse(localStorage.getItem("cartList"));
//   }else{
//     return []
//   }
 
// };
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:[] ,
  },
  reducers: {
    addToCart: (state, action) => {
      const prod = state.cartItems.find((p) => p.id === action.payload.id);

      if (prod) {
        // console.log(prod)
        prod.qunatity++;
        prod.attributes.price = prod.oneQuantityPrice * prod.qunatity;
      } else {
        state.cartItems.push({ ...action.payload, qunatity: 1 });
      }

      // localStorage.setItem("cartList", JSON.stringify(staLists));
    },
    updateQuantityAndSize: (state, action) => {
      staLists = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });

      // localStorage.setItem("cartList", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );

      // localStorage.setItem("cartList", JSON.stringify(state.cartItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantityAndSize, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
