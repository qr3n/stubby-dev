import {Link} from "react-router-dom";
import {useContext} from "react";
import {GlobalContext} from "@/shared";

export const Menu = () => {
    const { energy } = useContext(GlobalContext)

    return (
        <div
            className='flex left-1/2 -translate-x-1/2 gap-3 items-center justify-center flex-col w-[calc(100%-64px)] absolute bottom-8'
        >
            <div className='flex gap-2 items-center justify-between w-full'>
                <div className='flex  backdrop-blur-md w-full px-4 py-3 gap-4 justify-between rounded-3xl'
                     style={{background: 'rgb(255, 255, 255, .4)'}}>
                    <Link to='/' style={{background: 'rgb(255, 255, 255, .6)'}}
                          className='w-[25%] flex pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                        <div className='bg-gray-800 px-4 py-1.5 rounded-full w-full text-center'>
                            <p className='font-semibold text-white text-xs sm:text-sm'>Home</p>
                        </div>
                    </Link>
                    <Link to='/tasks' style={{background: 'rgb(255, 255, 255, .6)'}}
                          className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                        <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                            <p className='font-semibold text-white text-xs sm:text-sm'>Task</p>
                        </div>
                    </Link>
                    <Link to='/ref' style={{background: 'rgb(255, 255, 255, .6)'}}
                          className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                        <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                            <p className='font-semibold text-white text-xs sm:text-sm'>Ref</p>
                        </div>
                    </Link>
                    <Link to='/faq' style={{background: 'rgb(255, 255, 255, .6)'}}
                          className='flex w-[25%] pt-2 rounded-3xl items-center justify-center flex-col gap-0.5'>
                        <div className='bg-gray-600 px-4 py-1.5 rounded-full w-full text-center'>
                            <p className='font-semibold text-white text-xs sm:text-sm'>FAQ</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='backdrop-blur-md w-full p-2.5 rounded-full relative'
                 style={{background: 'rgb(0, 0, 0, .4)'}}>
                <div
                    className='absolute bg-gradient-to-l from-[#000] to-[#333] backdrop-blur-md p-2.5 top-0 left-0 rounded-full transition-all will-change-transform'
                    style={{width: `${energy}%`}}/>
            </div>
        </div>
    )
}