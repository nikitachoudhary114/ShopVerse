
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>
);
