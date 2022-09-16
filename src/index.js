import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { keeperSlice } from "./redux/keeperSlice";

const store = configureStore({
    reducer: { keeper: keeperSlice.reducer },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
