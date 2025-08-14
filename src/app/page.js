

import React from 'react'
import DBConnection from './utils/config/db'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import UserNavigation from './components/UserNavigation'
import AdminPage from './admin/page'
import ProductCollection from './components/productCollections'

const HomePage = async() => {

  // const session = await auth()

  await DBConnection()
 
  // if(!session){
  //   redirect("/")
  // }
  // const userName = session.user.name || "Guest";
  return (
    <div>
      {/* {session.role === 'user' &&  ( */}
        <>
        <UserNavigation userName = {"AchvamsiKr"}/>
        <img src='banner.jpg' alt='banner' className='bannerImage'/>
        <ProductCollection />
        </>
      {/* ) } */}
      {/* {session.role === 'admin' &&
        <AdminPage /> 
    } */}
    </div>
  )
}

export default HomePage
