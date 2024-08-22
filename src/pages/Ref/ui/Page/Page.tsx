import { FC } from "react";
import bg from './bg.jpg'
import copy from './copy.png'

const Ref: FC = () => {
  return (
      <>
        <div className='w-screen h-screen absolute -z-50'>
          <img src={bg} alt={'bg'} className='w-full h-full object-cover'/>
        </div>
        <div
            className='w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <div
              className='py-2 mb-6 px-4 flex gap-2 items-center justify-center bg-[#303131] rounded-full rotate-[-5deg] mt-4'>
            <div className='font-semibold flex gap-1'>
              <p className='text-green-400'>X2</p>
              Now
            </div>
          </div>
          <h1 className='text-black text-6xl font-bold'>Invite</h1>
          <div className='mt-8 w-full flex items-center justify-between bg-white p-4 rounded-2xl'>
            <div className='max-w-[87%] relative'>
              <p className='font-medium text-[#303131] max-w-full text-nowrap overflow-hidden whitespace-nowrap'>http://t.me/elixiumton/invite?user-id=1233334422414</p>
              <div
                  className='absolute top-0 left-0 w-full h-full bg-gradient-to-l from-white to-transparent'/>
            </div>
            <div className='bg-gray-200 p-2 rounded-lg cursor-pointer active:scale-90 transition-all'>
              <img src={copy} alt={'copy'} width={18}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 h-[45%] rounded-2xl overflow-y-scroll absolute bottom-0 w-full px-6'>

        </div>
      </>
  );
};

export default Ref;