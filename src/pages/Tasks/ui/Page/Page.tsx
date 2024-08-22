import {FC, useContext, useEffect, useState} from "react";
import {
    api,
    Dialog,
    DialogContent,
    DialogTrigger,
    GlobalContext,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/shared";
import {useWebApp} from "@vkruglikov/react-telegram-web-app";
import {useMutation} from "react-query";
import {CheckCircle, Loader2} from "lucide-react";
import {useForm} from "react-hook-form";

interface IInputValues {
    wallet: string
}

const Tasks: FC = () => {
    const webapp = useWebApp()
    const { setBalance, user, claimed, setClaimed } = useContext(GlobalContext)
    const [url, setUrl] = useState('')
    const { register, handleSubmit } = useForm<IInputValues>()
    const [open, setOpen] = useState(false)

    const { mutate, isLoading, isSuccess } = useMutation(async (task: string) => api.post(`/claim`, {
        task,
        id: user?.id
    }).then(() => setClaimed(prev => [...prev, task])))

    const {
        mutate: mutateWallet,
        isLoading: isMutateWalletLoading,
        isSuccess: isMutateWalletSuccess
    } = useMutation(async (wallet: string) => api.post('/wallet', {
        id: user?.id,
        wallet
    }))

    const submit = handleSubmit((values) => {
        mutateWallet(values.wallet)
    })

    useEffect(() => {
        if (isSuccess) {
            webapp.openLink(url)
            setBalance(prev => prev! += 500)
        }
    }, [isSuccess, setBalance, url, webapp]);

    useEffect(() => {
        if (isMutateWalletSuccess) {
            setClaimed(prev => [...prev, 'wallet'])
            setBalance(prev => prev! += 500)
            setOpen(false)
        }
    }, [isMutateWalletSuccess, setBalance, setClaimed]);

    return (
      <div
          className=' w-full px-8 flex items-center flex-col justify-center fixed z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
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
                      <Dialog open={open} onOpenChange={setOpen}>
                          <DialogTrigger className='w-full'>
                              <button
                                  disabled={isLoading}
                                  className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                                  Start
                                  { claimed.includes('wallet') ? <CheckCircle/> : 'Start' }
                              </button>
                          </DialogTrigger>
                          <DialogContent className='bg-white text-black'>
                              <h1 className='text-3xl font-bold text-center'>Solana wallet</h1>
                              <form onSubmit={submit} className='w-full'>
                                  <input {...register('wallet')} className='text-white w-full bg-[#303131] p-3 pl-4 rounded-xl'
                                         placeholder='7EcDhSYGxXyscszYEp35KHN8vvw3'/>
                                  <div
                                      onClick={submit}
                                      className='bg-black hover:bg-[#404141] rounded-full mt-4 text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                                      { isMutateWalletLoading ? <Loader2 className='animate-spin'/> : 'Save' }
                                  </div>
                              </form>
                          </DialogContent>
                      </Dialog>
                  </div>
              </TabsContent>

              <TabsContent value="password">
                  <div className='mt-4 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Buy STUBBY</h1>
                      </div>
                      <button
                          disabled={isLoading}
                          onClick={() => {
                              setUrl('https://raydium.io/swap/?inputMint=6ezAua3VoAo3TRBic8oSufabmM75V8mUaGrpwvLze8n6&outputMint=sol')
                              mutate('token')
                          }}
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          {claimed.includes('token') ? <CheckCircle/> : (isLoading ?
                              <Loader2 className='animate-spin'/> : 'Start')}
                      </button>
                  </div>
                  <div className='mt-4 text-black w-full flex gap-3 rounded-2xl  p-3'
                       style={{backgroundColor: 'rgb(255, 255, 255, .7)'}}>
                      <div className='bg-white p-2 pl-3 min-w-[210px] rounded-xl flex items-center'>
                          <h1 className='font-semibold'>Buy NFT St.Stubby</h1>
                      </div>
                      <button
                          disabled={isLoading}
                          onClick={() => {
                              setUrl('https://solsea.io/c/66472dc44b21d7621ca637f8')
                              mutate('nft')
                          }}
                          className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                          {claimed.includes('nft') ? <CheckCircle/> : (isLoading ?
                              <Loader2 className='animate-spin'/> : 'Start')}
                      </button>
                  </div>
              </TabsContent>
          </Tabs>
      </div>
    );
};

export default Tasks;
