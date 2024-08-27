import {FC, useContext} from "react";
import copy from './copy.png'
import {GlobalContext} from "@/shared";
import logo from './logo.webp'

const Ref: FC = () => {
    const { user, refs } = useContext(GlobalContext)

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
                  <div onClick={() => navigator.clipboard.writeText(`https://t.me/stubbycryptobot?start=${user?.id}`)}
                       className='bg-gray-200 p-2 rounded-lg cursor-pointer active:scale-90 transition-all'>
                      <img src={copy} alt={'copy'} width={18}/>
                  </div>
              </div>

              <div className='mt-8 w-full flex flex-col gap-3 max-h-[calc(100dvh-580px)] overflow-scroll'>
                  {refs.map(r => (
                      <div className='flex justify-between w-full p-4 rounded-2xl bg-white  '>
                          <h1 className='font-medium text-black'>@{r}</h1>
                          <div className='flex gap-2 items-center justify-center'>
                              <p className='text-[#301333] font-bold'>+500</p>
                              <img src={logo} alt='logo' className='w-7'/>
                          </div>
                      </div>
                  ))}

              </div>
          </div>
      </>
  );
};

export default Ref;
