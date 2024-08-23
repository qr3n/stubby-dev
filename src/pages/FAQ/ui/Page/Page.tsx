import { FC } from "react";
import {Accordion, AccordionContent, AccordionTrigger} from "@/shared";
import {AccordionItem} from "@radix-ui/react-accordion";

const FAQ: FC = () => {
  return (
      <div
          className='w-full px-8 flex items-center flex-col justify-center absolute z-50 top-[20%] -translate-y-10 left-1/2 -translate-x-1/2'>
          <h1 className='text-black text-6xl font-bold'>FAQ</h1>
          <Accordion type="single" collapsible className="w-full text-black">
              <AccordionItem value="item-1">
                  <AccordionTrigger className='text-sm p-3 rounded-2xl bg-white mt-8 font-semibold'>Who is Stubby?</AccordionTrigger>
                  <AccordionContent className='text-xs' style={{ backgroundColor: 'rgb(255, 255, 255, .6)', borderRadius: '24px', marginTop: '1rem', padding: '1rem'}}>
                      Stubby is a famous military dog who fought in the First World War, received many honours and is the only dog in history to be promoted to the rank of Sergeant for his heroic actions in the war.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                  <AccordionTrigger className='text-sm p-3 rounded-2xl bg-white mt-4 font-semibold'>What are we aiming for?</AccordionTrigger>
                  <AccordionContent className='text-xs' style={{ backgroundColor: 'rgb(255, 255, 255, .55)', borderRadius: '24px', marginTop: '1rem', padding: '1rem'}}>
                      We aim to build a strong community that rallies around the brave hero Stubby and bring peace to the world.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                  <AccordionTrigger className='text-left items-start text-sm p-3 rounded-2xl bg-white mt-4 font-semibold'>Where is the STUBBY token traded?</AccordionTrigger>
                  <AccordionContent className='text-left items-start text-xs' style={{ backgroundColor: 'rgb(255, 255, 255, .55)', borderRadius: '24px', marginTop: '1rem', padding: '1rem'}}>
                      The STUBBY token is traded on the Raydium DEX exchange
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                  <AccordionTrigger className='text-sm p-3 rounded-2xl bg-white mt-4 font-semibold'>Minimum withdrawal quantity?</AccordionTrigger>
                  <AccordionContent className='text-xs' style={{ backgroundColor: 'rgb(255, 255, 255, .55)', borderRadius: '24px', marginTop: '1rem', padding: '1rem'}}>
                      You need to accumulate 150 000 STUBBY
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                  <AccordionTrigger className='text-sm p-3 rounded-2xl bg-white mt-4 font-semibold'>How can I get my STUBBY tokens?</AccordionTrigger>
                  <AccordionContent className='text-xs' style={{ backgroundColor: 'rgb(255, 255, 255, .55)', borderRadius: '24px', marginTop: '1rem', padding: '1rem'}}>
                      In order to receive your tokens you need to have 1 NFT St.Stubby on your wallet balance.
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
      </div>
  );
};

export default FAQ;
