import { FC } from "react";
import bell from './bell.webp'
import earn from './earn.png'
import {Link} from "react-router-dom";

const Tasks: FC = () => {
  return (
      <div
          className=' w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <h1 className='text-black text-6xl font-bold'>Tasks</h1>
          <Link to='/tasks/subscribe' className='w-full'>
              <div
                  className='p-4 bg-white w-full rounded-2xl mt-8 text-[#303131] flex gap-3 items-center font-semibold'>
                  <img src={bell} alt='' className='w-8'/>
                  Subscribe
              </div>
          </Link>
          <Link to='/tasks/earn' className='w-full'>
              <div
                  className='p-4 bg-white w-full rounded-2xl mt-3 text-[#303131] flex gap-3 items-center font-semibold'>
                  <img src={earn} alt='' className='w-8'/>
                  Earn
              </div>
          </Link>
      </div>
  );
};

export default Tasks;
