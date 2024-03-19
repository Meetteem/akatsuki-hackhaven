"use client;"
import Head from 'next/head'
import Complaint from './components/Complaint'
import Admin from './components/Admin'
import Header from './components/Header'
import Status from './components/Status'
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Link from 'next/link';
import Router from 'next/router';

export default function Home() {
  const address = useAddress();
  // const router = useRouter();
  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer")
  // if(officer === address){
  //   Router.replace('/admin');
  // }
  return (
    <div className="" >
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a  complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-gray-100 min-h-screen">
    {/* <Head>
      <title className='text-center'>Decentralized Complaint System</title>
      <meta name="description" content="Decentralized Complaint System Landing Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}

    {/* <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold text-gray-800">Decentralized Complaint System</h1>
      </div>
    </header> */}

    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src="/feature1.svg" alt="Feature 1" className="w-48" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Decentralized Data Storage</h2>
            <p className="text-lg text-gray-600">
              Store complaints securely on the decentralized network, ensuring data integrity and privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transparent Record Keeping</h2>
            <p className="text-lg text-gray-600">
              Every complaint record is transparently stored on the blockchain for accountability and auditability.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/feature2.svg" alt="Feature 2" className="w-48" />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src="/feature3.svg" alt="Feature 3" className="w-48" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Automated Resolution Process</h2>
            <p className="text-lg text-gray-600">
              Utilize smart contracts and automated processes for faster and fairer complaint resolutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Privacy Protection</h2>
            <p className="text-lg text-gray-600">
              Personal data is encrypted and remains under the control of users, ensuring privacy and GDPR compliance.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/feature4.svg" alt="Feature 4" className="w-48" />
          </div>
        </div>
      </section>

      {/* Add more sections for other features */}

    </main>
    <div className='flex justify-center p-10'>
      <p className='text-lg text-gray-600'>Have any complaint</p>
    <Link className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md ml-4" href='/complain'>File Your Complaint Here</Link>
    </div>
    <footer className="bg-white border-t border-gray-200 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600">&copy; Created by Akatsuki</p>
      </div>
    </footer>
  </div>
    </div>
  )
}
