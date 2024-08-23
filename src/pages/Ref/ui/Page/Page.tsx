import {FC, useContext} from "react";
import copy from './copy.png'
import {GlobalContext} from "@/shared";

const Ref: FC = () => {
    const { user } = useContext(GlobalContext)

  return (
      <>
        <div
            className='w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <div
              className='py-2 mb-6 px-4 flex gap-2 items-center justify-center bg-[#303131] rounded-full rotate-[-5deg] mt-4'>
            <div className='font-semibold text-white flex gap-1'>
              <p className='text-green-400'>X2</p>
              Now
            </div>
          </div>
          <h1 className='text-black text-6xl font-bold'>Invite</h1>
            <div className='mt-8 w-full flex items-center justify-between bg-white p-4 rounded-2xl'>
                <div className='max-w-[87%] relative'>
                    <p className='font-medium text-[#303131] max-w-full text-nowrap overflow-hidden whitespace-nowrap'>https://t.me/stubbycryptobot?start=${user?.id}</p>
                    <div
                        className='absolute top-0 left-0 w-full h-full bg-gradient-to-l from-white to-transparent'/>
                </div>
                <div onClick={() => navigator.clipboard.writeText(`https://t.me/stubbycryptobot?start=${user?.id}`)} className='bg-gray-200 p-2 rounded-lg cursor-pointer active:scale-90 transition-all'>
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
