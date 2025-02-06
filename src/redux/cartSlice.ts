import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the product type
type ProductType = {
  name: string;
  quantity: number;
};

// Define the cart state type
type CartState = {
  products: ProductType[];
  totalPrice: number;
  shipping: number;
  grandTotal: number;
};

// Function to load cart state from localStorage
const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState
      ? JSON.parse(serializedState)
      : { products: [], totalPrice: 0, shipping: 0, grandTotal: 0 };
  } catch (error) {
    console.error("Error loading cart state from localStorage:", error);
    return { products: [], totalPrice: 0, shipping: 0, grandTotal: 0 };
  }
};

// Function to save cart state to localStorage
const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving cart state to localStorage:", error);
  }
};

// Initialize state from localStorage
const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ name: string; quantity: number }>
    ) => {
      const existingProduct = state.products.find(
        (product) => product.name === action.payload.name
      );
      if (existingProduct) {
        if (existingProduct.quantity + action.payload.quantity <= 10) {
          existingProduct.quantity += action.payload.quantity;
        }
      } else {
        state.products.push({
          name: action.payload.name,
          quantity: action.payload.quantity,
        });
      }
      saveState(state); // Save to localStorage after update
    },
    removeAllProducts: (state) => {
      Object.assign(state, {
        products: [],
        totalPrice: 0,
        shipping: 0,
        grandTotal: 0,
      });
      saveState(state);
    },
    addQuantity: (state, action: PayloadAction<{ name: string }>) => {
      const product = state.products.find(
        (product) => product.name === action.payload.name
      );

      if (product && product.quantity < 10) {
        product.quantity += 1;
        saveState(state);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ name: string }>) => {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity -= 1;
        } else {
          state.products.splice(productIndex, 1);
        }
        saveState(state);
      }
    },
  },
});

export const { addProduct, removeAllProducts, addQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
