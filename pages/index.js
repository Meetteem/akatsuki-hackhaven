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
          <div className="flex items-center justify-center " >
            <img src="/hh1.jpg" alt="Feature 1" className="rounded-lg" width="600" />
          </div>
          <div className="flex flex-col justify-center ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Decentralized Data Storage</h2>
            <p className="text-lg text-gray-600 text-justify" >
        Store complaints securely on the decentralized network, ensuring data integrity and privacy. 
        Our decentralized data storage solution leverages blockchain technology, distributing complaint records across a network of nodes, eliminating single points of failure and enhancing security. 
       
      </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transparent Record Keeping</h2>
            <p className="text-lg text-gray-600 text-justify">
        Every complaint record is transparently stored on the blockchain for accountability and auditability.
        Our system utilizes the inherent transparency of blockchain technology to ensure that every complaint record is publicly accessible and immutable. 
        
        
      </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/hh2.jpg" alt="Feature 2" className="w-58 rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src="/hh3.jpg" alt="Feature 3" className="rounded-lg" width="600" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Automated Resolution Process</h2>
            <p className="text-lg text-gray-600 text-justify">
        Utilize smart contracts and automated processes for faster and fairer complaint resolutions.
        Our platform harnesses the power of smart contracts, self-executing code deployed on a blockchain, to automate and streamline the complaint resolution process.
        
        
      </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Privacy Protection</h2>
            <p className="text-lg text-gray-600 text-justify">
        Personal data is encrypted and remains under the control of users, ensuring privacy and GDPR compliance.
        Our platform prioritizes the protection of user privacy by employing robust encryption techniques to safeguard personal data.

        
        </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/hh4.jpg" alt="Feature 4" className="rounded-lg" width="600"/>
          </div>
        </div>
      </section>

      {/* Add more sections for other features */}

    </main>
    <div className='flex justify-center p-2'>
      <p className='text-lg text-gray-600'>Have any complaint</p>
      </div>
      <div className='flex justify-center pb-4'>
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
