import React from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'


const home = () => {
  return (
    <div>
        <Header />
        <main className='pt-20'>
        <h1>Home page</h1>
        <div className='space-y-4'>
        <Card title="Welcome to ALX ProDev" content="This is the homepage of the ALX ProDev project." />
        <Card title="About ALX ProDev" content="ALX ProDev is a project that aims to provide a platform for developers to showcase their skills and connect with potential employers." />
        </div>
        </main>
    </div>
  )
}

export default home