import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../constants/axios";

const INITIAL_STATE = {
    isLoading: false,
    productList: [],
    isError: false
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await instance.get('data/page1.json');
    return response.data.page;
});

const productSlice = createSlice({
    name: "products",
    initialState:INITIAL_STATE,
    extraReducers: (builder: any) => {
        builder.addCase(fetchProducts.pending, (state: { isLoading: boolean; }, action: any) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state: { isLoading: boolean; productList: any; }, action: { payload: any; }) => {
            state.isLoading = false;
            state.productList = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state: { isError: boolean; }, action: any) => {
            state.isError = true;
        });
    }
} as any);

export default productSlice.reducer;