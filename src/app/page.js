

import React from 'react'
import DBConnection from './utils/config/db'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import UserNavigation from './components/UserNavigation'
import AdminPage from './admin/page'
import ProductCollection from './components/productCollections'
import Head from 'next/head'

const HomePage = async() => {

  const session = await auth()

  await DBConnection()
 
  if(!session){
    redirect("/login")
  }
  const userName = session.user.name || "Guest";
  return (
    <div>

            <Head>
            <meta name="google-site-verification" content="nGew1Jmg4Z9p78jCp0CcNI4VM0OpuEyrWc7aeEykKeY" />
                  </Head>
      {session.role === 'user' &&  (
        <>
        <UserNavigation userName = {userName}/>
        <img src='banner.jpg' alt='banner' className='bannerImage'/>
        <ProductCollection />
        </>
      ) }
      {session.role === 'admin' &&
        <AdminPage /> 
    }
    </div>
  )
}

export default HomePage
