import React, { useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";

const Status = () => {
    const [id, setId] = useState(0);
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: Complaints } = useContractRead(contract, "Complaints", id);

    return (
        <div className='status-container bg-gray text-black p-8 rounded-lg shadow-lg min-h-full'>
            <div className='status'>
                <p className='status-title text-2xl font-bold mb-4'>Check Status of Your Complaint:</p>
                <div className='flex items-center mb-4'>
                    <p className='status-text text-lg font-semibold mr-2'>Complaint ID:</p>
                    <input
                        type="number"
                        className='status-input w-64 rounded-md p-2 bg-white text-black'
                        placeholder='Enter Complaint ID'
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
            </div>
            {Complaints && Complaints.title && (
                <div className="status-render-container">
                    <p className='status-render-title text-lg font-bold mb-2'>Complaint Details:</p>
                    <div className='status-render-text-container'>
                        <p className='status-render-text font-semibold'>
                            Complaint Id: {(Complaints.id).toString()}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Complaint by: {(Complaints.complaintRegisteredBy).toString()}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Complaint Title: {Complaints.title}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Approval Status: {Complaints.isApproved ? "Approved" : !Complaints.exists ? "Declined" : "Approval Pending"}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Approval Remark: {Complaints.approvalRemark}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}
                        </p>
                        <p className='status-render-text font-semibold'>
                            Resolution Remark: {Complaints.resolutionRemark}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Status;
