import React from 'react'

import { redirect } from 'next/navigation';
import axios from 'axios';
import Dashboard from '../../components/Dashboard';

type Props = {}

export default function Page({}: Props) {

return(
   <div>  
   <Dashboard/>
   </div>
  )
}