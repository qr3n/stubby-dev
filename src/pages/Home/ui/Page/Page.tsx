import {FC, useEffect, useState} from "react";
import {useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";

const Home: FC = () => {
  const [initData] = useInitData()
  const [user, setUser] = useState<WebAppUser>()

  useEffect(() => {
    if (initData) {
      setUser(initData.user)
    }
  }, [initData]);

  return (
    <>
      { user?.username }
    </>
  );
};

export default Home;
