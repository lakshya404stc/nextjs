import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
} from 'lucide-react'
import Link from 'next/link'
import UpgradeButton from '@/components/UploadButton'
import { useGlobalContext } from "@/app/Context/store";

const Page = () => {

    const pricingItems = [
    {
      plan: 'Starter',
      tagline: 'For small side projects.',
      quota: 19.99,
      features: [
        {
          text: '15 request & 2 revision',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '0 Thumbnails',
          footnote:
            'The maximum file size of a single PDF file.',
            negative: true,
        },
        {
          text: '10 Post it Everywhere',
        },
        {
          text: '10 YouTube Ideas generator',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Youtube Rediection',
        },
      ],
    },
    {
      plan: 'Pro',
      tagline: 'For larger projects with higher needs.',
      quota: 25,
      features: [
        {
          text: '25 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '16MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Priority support',
        },
      ],
    },
    {
        plan: 'Pro',
        tagline: 'For larger projects with higher needs.',
        quota: 25,
        features: [
          {
            text: '25 pages per PDF',
            footnote:
              'The maximum amount of pages per PDF-file.',
          },
          {
            text: '16MB file size limit',
            footnote:
              'The maximum file size of a single PDF file.',
          },
          {
            text: 'Mobile-friendly interface',
          },
          {
            text: 'Higher-quality responses',
            footnote:
              'Better algorithmic responses for enhanced content quality',
          },
          {
            text: 'Priority support',
          },
        ],
      }
  ]
  

  return (
    <>
      <div  className="">
      <h1  className="mx-auto mt-5 max-w-xl text-center sm:text-4xl text-3xl md:text-4xl lg:text-5xl">
        Create Content with <span className="text-blue-600">AI</span> in seconds
      </h1>
      <p  className="mx-auto mt-5 min-w-prose text-zinc-800 text-center sm:text-lg">
        AI will help you take care of your Ideas for new Content
      </p>
      </div>
        <div className='px-5 justify-center items-center mt-5 pt-12 grid grid-cols-1 gap-20 lg:grid-cols-3'>
          <TooltipProvider>
            {pricingItems.map(
              ({ plan, tagline, quota, features }) => {
                return (
                  <div 
                    key={plan}
                    className={cn(
                      'relative rounded-2xl bg-white sm:w-[400px] w-[320px] mx-auto shadow-lg ',
                      {
                        'border-2 border-blue-600 shadow-blue-200':
                          plan === 'Pro',
                        'border-2 border-black shadow-blue-200':
                          plan !== 'Pro',
                      }
                    )}>
                    {plan === 'Pro' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                        Upgrade now
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display sm:text-3xl text-2xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-gray-500'>
                        {tagline}
                      </p>
                      <p className='my-5 font-display sm:text-5xl text-4xl font-semibold'>
                        ${quota}
                      </p>
                      <p className='text-gray-500'>
                        per month
                      </p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                      <div className='flex items-center space-x-1'>
                        <p>
                          {quota.toLocaleString()} Request
                          Provided
                        </p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <HelpCircle className='h-4 w-4 text-zinc-500' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            How many times you can upload your Channel
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(
                        ({ text, footnote, negative }) => (
                          <li
                            key={text}
                            className='flex space-x-5'>
                            <div className='flex-shrink-0'>
                              {negative ? (
                                <Minus className='h-6 w-6 text-gray-300' />
                              ) : (
                                <Check className='h-6 w-6 text-blue-500' />
                              )}
                            </div>
                            {footnote ? (
                              <div className='flex items-center space-x-1'>
                                <p
                                  className={cn(
                                    'text-gray-600',
                                    {
                                      'text-gray-400':
                                        negative,
                                    }
                                  )}>
                                  {text}
                                </p>
                                <Tooltip
                                  delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      negative,
                                  }
                                )}>
                                {text}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <div className='border-t border-gray-200' />
                    <div className='p-5'>

                        <Link href="/login" className={buttonVariants({
                            className: 'w-full',
                            variant: 'secondary',
                          })}>
                          Upgrade Now
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      
                    </div>
                  </div>
                )
              }
            )}
          </TooltipProvider>
        </div>

    </>
  )
}

export default Page
