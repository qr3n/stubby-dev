import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NoMatch } from "@/pages";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";

const App: FC = () => {
  return (
    <WebAppProvider options={{
        smoothButtonsTransition: true
    }}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </WebAppProvider>
  );
};

export default App;
