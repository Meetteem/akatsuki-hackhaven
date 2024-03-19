import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const Complaint = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: nextId } = useContractRead(contract, "nextId")
    const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint");

    const handleComplaint = async () => {
        const notification = toast.loading("Filing Complaint");
        try {
            console.log(title, description);
            const data = await contract.call("fileComplaint", [title,description])
            toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
                id: notification,
            });
            setTitle("");
            setDescription("");
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });
            console.error("contract call failure", err);
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className='flex justify-center items-start min-h-screen bg-gray-100'>
            <div className='w-full  mt-10 bg-gray-900 rounded-md shadow-lg p-8 text-white' style={{ height: '450px', width: '700px' }}>
            <h1 className="text-4xl text-white-600 mb-6">File Your Complaint Here:</h1>
            <div className='mb-4'>
                <label htmlFor="title" className='block text-lg mb-1'>Title:</label>
                <input
                    id="title"
                    type="text"
                    className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500'
                    placeholder='Enter Title Here'
                    onChange={handleTitleChange}
                />
            </div>
            <br></br>
            
            <div className='mb-4'>
                <label htmlFor="description" className='block text-lg mb-1'>Description:</label>
                <input
                    id="description"
                    type="text"
                    className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500'
                    placeholder='Enter Description Here'
                    onChange={handleDescriptionChange}
                />
            </div>
            <br></br>
            <br></br>
            <div className='flex justify-center'>
            <button type="submit"  className="w-full bg-gray-600 text-white hover:text-black hover:bg-white rounded-md py-3 px-6 transition duration-300 justify-center"  style={{ width: '350px' }}  onClick={handleComplaint}>
                File Complaint
            </button>
            </div>
        </div>
    </div>
    


    );
};

export default Complaint;
