import './globals.css'
import type { Metadata } from 'next'
import Home from './page'

export const metadata: Metadata = {
  title: 'DNA',
  description: 'DNA',
}

export default function RootLayout() {
  return (
    <Home />
  )
}
