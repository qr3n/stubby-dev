import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";
import coin from './coin.png'
import {Link} from "react-router-dom";
import bg from './bg.jpg'
interface INumber {
  id: number,
  x: number,
  y: number,
  value: string,
  show: boolean
}

const Coin = (props: { setCoins: Dispatch<SetStateAction<number>>, setEnergy: Dispatch<SetStateAction<number>> }) => {
  const [numbers, setNumbers] = useState<INumber[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const click = (event: any) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 100);
    props.setCoins(prev => prev += 0.25)
    props.setEnergy(prev => prev -= 0.25)
    const { clientX, clientY } = event;
    const newNumber = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      value: '0,25',
      show: true,
    };
    setNumbers(prev => [...prev, newNumber]);
  };

  const handleClick = (event: any) => {
    const now = new Date().getTime();

    if (now - lastClickTime >= 1000) {
      setLastClickTime(now);
      click(event);
    }
  };

  const handleAnimationEnd = (id: number) => {
    setNumbers(numbers.filter(number => number.id !== id));
  };

  return (
      <div id="ex1" className='mt-4'>
        <img draggable={false} onClick={handleClick} alt='coin' src={coin}
               className='coin z-50 transition-all cursor-pointer max-w-[80vw] number-appear-area'
               style={{ transform: `${isActive ? 'scale(95%)' : 'scale(100%)'}` }}
        />
        {numbers.map(number => (
            <div
                key={number.id}
                className={`number-appear text-5xl font-bold ${number.show ? 'show' : ''}`}
                style={{ left: number.x + 'px', top: number.y + 'px', pointerEvents: 'none' }}
                onAnimationEnd={() => handleAnimationEnd(number.id)}
            >
              {number.value}
            </div>
        ))}
      </div>
  );
};

const Home: FC = () => {
  const [initData] = useInitData()
  const [user, setUser] = useState<WebAppUser>()
  const [_, setEnergy] = useState(100)
  const [coins, setCoins] = useState(0)

  useEffect(() => {
    if (initData) {
      setUser(initData.user)
    }
  }, [initData]);

  return (
      <div className='flex-col w-screen h-screen flex items-center justify-center select-none'>
        <img src={bg} alt={''} className='fixed top-0 left-0 object-cover w-screen h-screen'/>
        <div className='flex flex-col items-center justify-center -mt-24'>
          <div
              className='py-2 mb-6 px-4 flex gap-2 items-center justify-center bg-[#303131] rounded-full rotate-[-5deg] mt-4'>
            <div className='font-semibold flex gap-1'>
              <p className='text-green-400'>@</p>
              {user?.username}
            </div>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <h1 className='text-[#303131] font-bold z-50 text-5xl'>{coins.toFixed(2).toString().replace('.', ',')}</h1>
          </div>
          <Coin setCoins={setCoins} setEnergy={setEnergy}/>
        </div>
        <div
            className='flex gap-3 items-center justify-center flex-col w-[calc(100%-64px)] absolute bottom-8'
        >
          <div className='flex gap-2 items-center justify-between w-full'>
            <div className='flex  backdrop-blur-md w-full px-4 py-3 gap-4 justify-between rounded-3xl'
                 style={{background: 'rgb(255, 255, 255, .4)'}}>
              <Link to='/' style={{background: 'rgb(255, 255, 255, .6)'}}
                    className='w-[25%] flex pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                <div className='bg-gray-800 px-4 py-1.5 rounded-full w-full text-center'>
                  <p className='font-semibold text-white text-xs sm:text-sm'>Home</p>
                </div>
              </Link>
              <Link to='/tasks' style={{background: 'rgb(255, 255, 255, .6)'}}
                    className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                  <p className='font-semibold text-white text-xs sm:text-sm'>Task</p>
                </div>
              </Link>
              <Link to='/ref' style={{background: 'rgb(255, 255, 255, .6)'}}
                    className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                  <p className='font-semibold text-white text-xs sm:text-sm'>Ref</p>
                </div>
              </Link>
              <Link to='/faq' style={{background: 'rgb(255, 255, 255, .6)'}}
                    className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                  <p className='font-semibold text-white text-xs sm:text-sm'>FAQ</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='backdrop-blur-md w-full p-2.5 rounded-full relative'
               style={{background: 'rgb(0, 0, 0, .4)'}}>
            <div
                className='absolute bg-gradient-to-l from-[#000] to-[#333] backdrop-blur-md p-2.5 top-0 left-0 rounded-full transition-all will-change-transform'
                style={{width: `100%`}}/>
          </div>
        </div>
      </div>
  );
};

export default Home;
