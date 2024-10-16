import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
          <App/>
      </QueryClientProvider>
  </BrowserRouter>,
);
