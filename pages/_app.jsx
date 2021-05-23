import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { Router } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Разработчик сайтов и приложений Алексей Белинский</title>
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-14 sm:px-20 md:px-28 lg:px-20 xl:px-48">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={Router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
