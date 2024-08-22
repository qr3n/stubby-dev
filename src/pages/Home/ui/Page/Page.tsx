import {FC, useContext, useState} from "react";
import coin from './coin.png'
import {api, GlobalContext} from "@/shared";
import logo from './logo.png'
import stubby from './stubby.png'
interface INumber {
  id: number,
  x: number,
  y: number,
  value: string,
  show: boolean
}

const Coin = () => {
  const { user, setBalance, setEnergy } = useContext(GlobalContext);
  const [numbers, setNumbers] = useState<INumber[]>([]);
  const [isActive, setIsActive] = useState(false);

  const click = (event: any) => {
    api.post('/click', { id: user?.id })
    setIsActive(true);
    setTimeout(() => setIsActive(false), 100);

    setBalance(prev => prev! += 0.25)
    setEnergy(prev => prev! -= 1)

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

  const handleAnimationEnd = (id: number) => {
    setNumbers(numbers.filter(number => number.id !== id));
  };

  return (
      <div id="ex1" className='mt-4 select-none'>
        <img draggable={false} onClick={click} alt='coin' src={coin}
               className='coin select-none z-50 transition-all cursor-pointer max-w-[80vw] number-appear-area'
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
  const { user, balance } = useContext(GlobalContext)

  return balance !== null ? (
      <div className='flex-col w-screen h-screen flex items-center justify-center select-none'>
        <div className='flex flex-col items-center justify-center -mt-24'>
          <div
              className='py-2 mb-6 px-4 flex gap-2 items-center justify-center bg-[#303131] rounded-full rotate-[-5deg] mt-4'>
            <div className='font-semibold text-white flex gap-1'>
              <p className='text-green-400'>@</p>
              {user?.username}
            </div>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <img src={logo} className='w-12' alt='img'/>
            <h1 className='text-[#303131] font-bold z-50 text-5xl'>{balance?.toFixed(2).toString().replace('.', ',')}</h1>
          </div>
          <Coin/>
        </div>
      </div>
  ) : (
      <div className='flex items-center justify-center fixed z-50 top-0 left-0 w-screen h-screen bg-[#111]'>
        <img draggable={false} alt='coin' src={stubby}
             className='select-none z-50 transition-all cursor-pointer max-w-[60vw] max-h-[60vh] number-appear-area'/>
      </div>
  );
};

export default Home;
