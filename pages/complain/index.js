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
        <div className='complaint-container bg-gray-300 text-black p-8 rounded-md md:mr-10 md:ml-10'>
            <p className="complaint-title-red text-2xl mb-4">File Your Complaint Here:</p>
            <div className='flex items-center mb-4'>
                <p className='complaint-text-margin text-base'>Title: </p>
                <input
                    type="text"
                    className='container-input w-full md:w-[500px] ml-2 rounded-md p-2'
                    placeholder='Enter Title Here'
                    onChange={handleTitleChange}
                />
            </div>
            <div className='flex items-center mb-4'>
                <p className='complaint-text-normal text-base'>Description: </p>
                <input
                    type="text"
                    className='container-input w-full md:w-[500px] ml-2 rounded-md p-2'
                    placeholder='Enter Description Here'
                    onChange={handleDescriptionChange}
                />
            </div>
            <button type="submit" className="button-common bg-black text-white hover:bg-gray-900 rounded-md py-2 px-4" onClick={handleComplaint}>
                File Complaint
            </button>
        </div>
    );
};

export default Complaint;
