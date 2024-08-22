import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";

const App: FC = () => {
  return (
    <WebAppProvider options={{
        smoothButtonsTransition: true
    }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </WebAppProvider>
  );
};

export default App;
