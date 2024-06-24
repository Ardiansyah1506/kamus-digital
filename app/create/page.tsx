import FormCreate from '@/components/FormCreate'
import Head from 'next/head'
import React from 'react'



const CreateData = () => {
  return (
    <div className='max-w-md mx-auto mt-5'>
        <Head>
        <title>Tambah Terminologi</title>
      </Head>
        <h1 className='text-2xl text-center mb-2'>Tambah Data Terminologi</h1>
        <FormCreate/>
    </div>
  )
}

export default CreateData