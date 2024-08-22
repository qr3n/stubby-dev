import {Dispatch, FC, SetStateAction, useContext, useState} from "react";
import coin from './coin.png'
import {GlobalContext} from "@/shared";
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
  const [_, setEnergy] = useState(100)
  const [__, setCoins] = useState(0)
  const { user, balance } = useContext(GlobalContext)

  return (
      <div className='flex-col w-screen h-screen flex items-center justify-center select-none'>
        <div className='flex flex-col items-center justify-center -mt-24'>
          <div
              className='py-2 mb-6 px-4 flex gap-2 items-center justify-center bg-[#303131] rounded-full rotate-[-5deg] mt-4'>
            <div className='font-semibold flex gap-1'>
              <p className='text-green-400'>@</p>
              {user?.username}
            </div>
          </div>
          { balance ? (
              <div className='flex items-center justify-center gap-3'>
                <h1 className='text-[#303131] font-bold z-50 text-5xl'>{balance.toFixed(2).toString().replace('.', ',')}</h1>
              </div>
          ) : (
              <div role="status" className="max-w-sm flex animate-pulse">
                <div className="h-8 bg-gray-200 rounded-2xl dark:bg-white backdrop-blur w-24 mb-4"></div>
              </div>
          )}
          { balance ? (
              <Coin setCoins={setCoins} setEnergy={setEnergy}/>
          ) : (
              <div role="status" className="max-w-sm flex animate-pulse">
                <div className='coin z-50 transition-all cursor-pointer max-w-[80vw] number-appear-area rounded-full bg-gray-200 rounded-2xl dark:bg-white backdrop-blur'/>
              </div>
          )}
        </div>

      </div>
  );
};

export default Home;
