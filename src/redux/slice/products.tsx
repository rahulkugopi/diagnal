import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../constants/axios";

const INITIAL_STATE = {
    productList: [],
    isLoading: false,
    isError: false,
    filteredItems: [],
    allDetails: []
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await instance.get('data/page1.json');
    return response.data.page;
});

const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        filterItems: (state: any, action: any) => {
            state.filteredItems = state.productList.filter((product: any) =>
                product.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchProducts.pending, (state: { isLoading: boolean; }, action: any) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state: {
            allDetails: any;
            filteredItems: any; isLoading: boolean; productList: any;
        }, action: { payload: any; }) => {
            state.isLoading = false;
            state.productList = action.payload['content-items'].content;
            state.filteredItems = action.payload['content-items'].content;
            state.allDetails = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state: { isError: boolean; }, action: any) => {
            state.isError = true;
        });
    }
} as any);

export const { filterItems } = productSlice.actions;

export default productSlice.reducer;