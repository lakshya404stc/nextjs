import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Search } from '@/components/Search'
import Chatbot from '@/components/chatbot/Chatbot'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
    <>
    <MaxWidthWrapper className="mb-5 mt-2 sm:mt-20 flex flex-wrap flex-col items-center text-center justify-center">
    <h1  className=" mt-2 mx-auto  max-w-3xl text-center sm:text-4xl text-3xl md:text-5xl lg:text-6xl">
        Create Content with <span className="text-blue-600">AI</span> in seconds
      </h1>
      <p className="mt-5 max-w-prose text-zinc-800 sm:text-lg">
        AI will help you take care of your Ideas for new Content
      </p>
      
    </MaxWidthWrapper>
    <div className=' flex flex-wrap flex-col items-center text-center justify-center'>
      <Search/>
    </div>
    </>
    </div>
  )
}