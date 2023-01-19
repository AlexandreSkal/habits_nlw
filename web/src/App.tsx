import './styles/global.css'
import { Plus } from 'phosphor-react'
import { SummaryTable } from './components/SummaryTable'
import { Header } from './components/Header'

import logoImage from './assets/logo.svg'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}