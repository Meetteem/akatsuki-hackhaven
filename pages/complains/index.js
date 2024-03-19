import React from 'react'
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";


function index() {
    
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const getComplaints=async()=> {
        try{
            const data = await contract.call("Complaints","0" );
            console.log(data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
  return (
    <div><button onClick={getComplaints}>
     Click
    </button>
        </div>
  )
}

export default index