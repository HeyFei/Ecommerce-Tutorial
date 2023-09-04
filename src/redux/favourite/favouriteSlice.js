import {createSlice} from "@reduxjs/toolkit";

const items =
    localStorage.getItem("favouriteItems") !== null
        ? JSON.parse(localStorage.getItem("favouriteItems"))
        : [];

const setItemFunc = (item) => {
    localStorage.setItem("favouriteItems", JSON.stringify(item));
}

const initialState = {
    favouriteItems: items
}

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existItem = state.favouriteItems.find(
                (item) => item.id == newItem.id
            );

            if (existItem) {
                return {...state}
            } else {
                state.favouriteItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price

                })
            }
            setItemFunc(state.favouriteItems.map((item) => item));
        },

        removeItem(state, action) {
            const id = action.payload;
            const existItem = state.favouriteItems.find((item) => item.id == id);
            if (existItem) {
                state.favouriteItems = state.favouriteItems.filter((item) => item.id !== id);
            }

            setItemFunc(state.favouriteItems.map((item) => item));
        }
    }
});

export const favouriteActions = favouriteSlice.actions;
export default favouriteSlice;