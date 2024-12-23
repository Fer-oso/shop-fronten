import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "../src/router/index";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
