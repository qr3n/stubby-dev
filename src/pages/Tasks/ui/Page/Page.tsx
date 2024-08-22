import { FC } from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared";

const Tasks: FC = () => {
  return (
      <div
          className=' w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <h1 className='text-black text-6xl font-bold'>Tasks</h1>
          <Tabs defaultValue="account" className="flex justify-center flex-col mt-8 w-[70vw]">
              <TabsList>
                  <TabsTrigger value="account" className='rounded-2xl p-3  text-black font-semibold data-[state=active]:bg-white'>Subscribe</TabsTrigger>
                  <TabsTrigger value="password" className='rounded-2xl p-3 text-black font-semibold data-[state=active]:bg-white'>Earn</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                  <div className='mt-4 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Visit website</h1>
                      </div>
                      <a href='https://stubbyhero.com'>
                          <div
                              className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                              Start
                          </div>
                      </a>
                  </div>
                  <div className='mt-2 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                  <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Join our Group</h1>
                      </div>
                      <div
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          Start
                      </div>
                  </div>
                  <div className='mt-2 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Join our Twitter</h1>
                      </div>
                      <div
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          Start
                      </div>
                  </div>
                  <div className='mt-2 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Solana wallet address</h1>
                      </div>
                      <div
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          Start
                      </div>
                  </div>
              </TabsContent>

              <TabsContent value="password">

              </TabsContent>
          </Tabs>
      </div>
  );
};

export default Tasks;
