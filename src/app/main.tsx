import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <Provider store={store}>
          <script src="https://telegram.org/js/telegram-web-app.js"></script>
          <App/>
      </Provider>
  </BrowserRouter>,
);
