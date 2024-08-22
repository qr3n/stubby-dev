import {FC} from "react";
import {useInitData} from "@vkruglikov/react-telegram-web-app";

const Home: FC = () => {
  const [initData] = useInitData()

  console.log(initData)

  return (
    <>

    </>
  );
};

export default Home;
