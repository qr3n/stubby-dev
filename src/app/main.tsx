import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
              <App/>
          </QueryClientProvider>
      </Provider>
  </BrowserRouter>,
);
