import {FC} from "react";
import {useInitData} from "@vkruglikov/react-telegram-web-app";

const Home: FC = () => {
  const [_, initData] = useInitData()
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <p className="text-5xl font-bold"></p>
              <p className="py-5 flex-wrap">
                { initData === undefined ? 'undefined' : initData }
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
