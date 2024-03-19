import React, { useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";

const Status = () => {
    const [id, setId] = useState(0);
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: Complaints } = useContractRead(contract, "Complaints", id);

    return (
        <div className='status-container bg-gray-100 text-black p-8 rounded-lg shadow-lg min-h-full'>
    <div className='status bg-gray-900 px-4'>
        <p className='status-title text-white text-2xl font-bold mb-4 no-underline'>Check Status of Your Complaint:</p>
        <div className='flex items-center mb-4'>
            <p className='status-text text-white text-lg font-semibold mr-2'>Complaint ID:</p>
            <input
                type="number"
                className='status-input w-64 rounded-md p-2 bg-white text-black'
                placeholder='Enter Complaint ID'
                onChange={(e) => setId(e.target.value)}
            />
        </div>
    </div>
    {Complaints && Complaints.title && (
        <div className="status-render-container mt-8  py-8 px-4 bg-gray-900" style={{width:'800px'}} >
            <p className='status-render-title text-white text-2xl font-bold mb-2 no-underline'>Complaint Details:</p>
            <div className='status-render-text-container'>
                <p className='status-render-text font-semibold text-white'>
                    Complaint ID: {(Complaints.id).toString()}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Complaint by: {(Complaints.complaintRegisteredBy).toString()}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Complaint Title: {Complaints.title}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Approval Status: {Complaints.isApproved ? "Approved" : !Complaints.exists ? "Declined" : "Approval Pending"}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Approval Remark: {Complaints.approvalRemark}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}
                </p>
                <p className='status-render-text font-semibold text-white'>
                    Resolution Remark: {Complaints.resolutionRemark}
                </p>
            </div>
        </div>
    )}
</div>

    );
}

export default Status;
