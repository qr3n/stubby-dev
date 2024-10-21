import { useContext, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, GlobalContext } from "@/shared";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import stubby from './stubby.webp'
import toast from "react-hot-toast";

export const ClaimPage = () => {
    const { balance } = useContext(GlobalContext)
    const [walletAddr, setWalletAddr] = useState('')

    return balance !== null ? (
        <>
            <div
                className=' w-full px-8 flex items-center flex-col text-center justify-center fixed z-50 top-[25%] -translate-y-10 left-1/2 -translate-x-1/2'>
                <h1 className='text-white bg-[#333] rounded-full p-4 px-8 text-3xl rotate-[-5deg] font-bold flex gap-4 items-center'>
                    {balance >= 150000 ? "You're eligible!" : 'Not eligible'}
                    { balance >= 150000 ? <FaCheckCircle className='text-green-400 w-7 h-7'/> : <MdCancel className='text-red-400 w-7 h-7'/>}
                </h1>

                { balance < 150000 ? (
                    <img draggable={false} alt='coin' src={stubby}
                         className='select-none z-50 transition-all cursor-pointer max-w-[30vw] mt-8 max-h-[30vh] number-appear-area'/>
                ) : (
                    <>
                        <input
                            value={walletAddr}
                            onChange={e => setWalletAddr(e.target.value)}
                            className='text-black outline-none border-none placeholder-[#333] mt-12 w-full flex items-center justify-between bg-white p-4 rounded-2xl'
                            placeholder='Your wallet'
                        />

                        <Dialog>
                            { walletAddr ? (
                                <DialogTrigger className='w-full'>
                                    <button
                                        className='bg-[#303131] mt-4 hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                                        Claim
                                    </button>
                                </DialogTrigger>
                            ) : (
                                <button
                                    onClick={() => toast.error('Add your wallet first')}
                                    className='bg-[#303131] mt-4 hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                                    Claim
                                </button>
                            )}
                            <DialogContent className='bg-white text-black'>
                                <h1 className='text-black text-3xl text-center font-bold mt-4'>Claim your rewards</h1>
                                <input
                                    type='number'
                                    className='bg-[#333] text-white outline-none border-none placeholder-[#aaa] w-full flex items-center justify-between p-4 rounded-2xl'
                                    placeholder='Count'
                                />
                                <button
                                    className='bg-[#303131] hover:bg-[#404141] rounded-full text-center flex items-center justify-center text-white font-bold p-3 w-full'>
                                    Confirm
                                </button>
                            </DialogContent>
                        </Dialog>
                    </>
                )}

            </div>
        </>
    ) : <></>
}