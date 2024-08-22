import {FC, useContext, useEffect, useState} from "react";
import {api, GlobalContext, Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared";
import {useWebApp} from "@vkruglikov/react-telegram-web-app";
import {useMutation} from "react-query";
import {CheckCircle, Loader2} from "lucide-react";

const Tasks: FC = () => {
    const webapp = useWebApp()
    const { setBalance, user, claimed, setClaimed } = useContext(GlobalContext)
    const [url, setUrl] = useState('')

    const { mutate, isLoading, isSuccess } = useMutation(async (task: string) => api.post(`/claim`, {
        task,
        id: user?.id
    }).then(() => setClaimed(prev => [...prev, task])))

    useEffect(() => {
        if (isSuccess) {
            webapp.openLink(url)
            setBalance(prev => prev! += 500)
        }
    }, [isSuccess, setBalance, url, webapp]);

    return (
      <div
          className=' w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <h1 className='text-black text-6xl font-bold'>Tasks</h1>
          <Tabs defaultValue="account" className="flex justify-center flex-col mt-8 w-[90vw]">
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
                      <button
                          disabled={isLoading}
                          onClick={() => {
                              setUrl('https://stubbyhero.com')
                              mutate('website')
                          }}
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          {claimed.includes('website') ? <CheckCircle/> : (isLoading ? <Loader2 className='animate-spin'/> : 'Start') }
                      </button>
                  </div>
                  <div className='mt-2 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Join our Group</h1>
                      </div>
                      <button
                          disabled={isLoading}
                          onClick={() => {
                              setUrl('https://t.me/stubby_hero')
                              mutate('group')
                          }}
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          {claimed.includes('group') ? <CheckCircle/> : (isLoading ? <Loader2 className='animate-spin'/> : 'Start') }
                      </button>
                  </div>
                  <div className='mt-2 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Join our Twitter</h1>
                      </div>
                      <button
                          disabled={isLoading}
                          onClick={() => {
                              setUrl('https://x.com/StubbyBraveHero')
                              mutate('twitter')
                          }}
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          {claimed.includes('twitter') ? <CheckCircle/> : (isLoading ? <Loader2 className='animate-spin'/> : 'Start') }
                      </button>
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
