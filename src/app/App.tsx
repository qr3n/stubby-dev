import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {FAQ, Home, NoMatch, Ref, Tasks, ClaimPage} from "@/pages";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";
import bg from './bg.webp'
import {GlobalContextProvider} from "@/shared";
import {Menu} from "./menu.tsx";
import { Toaster } from "react-hot-toast";


const App: FC = () => {
  return (
      <WebAppProvider options={{
        smoothButtonsTransition: true
      }}>
        <GlobalContextProvider>
          <Toaster/>
          <img src={bg} alt={''} className='-z-50 fixed top-0 left-0 object-cover w-screen h-screen'/>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="*" element={<NoMatch/>}/>
              <Route path="/ref" element={<Ref/>}/>
              <Route path="/tasks" element={<Tasks/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/claim" element={<ClaimPage/>}/>
            </Route>
          </Routes>
          <Menu/>
        </GlobalContextProvider>
      </WebAppProvider>
  );
};

export default App;
