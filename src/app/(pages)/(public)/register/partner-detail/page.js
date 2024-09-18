'use client'
import React, { useState, useRef,useContext,useEffect } from "react";
// import fetchData from "../../utils/core";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "@/app/store/Context";

const Page = () => {
    const router = useRouter(); 

    const partner_cnic_name = useRef("");
    const partner_father_name = useRef("");
    const partner_mobile = useRef("");
    const partner_email = useRef("");
    const partner_dob = useRef("");
    const partner_status = useRef("");
    const partner_city = useRef("");
    const partner_cnic_number = useRef("");
    const partner_cnic_expiry_date = useRef("");
    const partner_home_address = useRef("");
    const partner_blood_cnic_name = useRef("");
    const partner_blood_cnic_number = useRef("");
    const partner_blood_relation = useRef("");
    const partner_bank_account = useRef("");

   
    const [userError, setUserError] = useState("");
    const {email,name,isRegistered,updatedUserCnic} = useContext(AuthContext)
    useEffect(() => {
            
        if(!isRegistered){
            router.replace('/register')
        }
        
        if (email,name) {
            partner_email.current.value = email; // Set default value
            partner_cnic_name.current.value = name

        }
    }, [email,name]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const partnerData = {
                partner_cnic_name: partner_cnic_name.current.value,
                partner_mobile: partner_mobile.current.value,
                partner_email: partner_email.current.value,
                partner_dob: partner_dob.current.value,
                partner_status: partner_status.current.value,
                partner_city: partner_city.current.value,
                partner_cnic_number: partner_cnic_number.current.value,
                partner_cnic_expiry_date: partner_cnic_expiry_date.current.value,
                partner_home_address: partner_home_address.current.value,
                partner_blood_cnic_name: partner_blood_cnic_name.current.value,
                partner_blood_cnic_number:partner_blood_cnic_number.current.value,
                partner_blood_relation: partner_blood_relation.current.value,
                partner_bank_account: partner_bank_account.current.value,
                partner_father_name: partner_father_name.current.value,
            };

            const response = await axios.post("https://oneclick-server-x09s.onrender.com/api/v1/auth/partner-detail", partnerData,
            { withCredentials: true }
        );
            console.log("partner-info response: ", response);

            if (!response) {
                setUserError("error");
                console.log("Invalid response from server");
                return;
            }
    
            if (response.success === false) {
                setUserError("error");
                console.log("User already exists");
                return;
            } else {
                toast.success(response.message); // Display success message from API
            }
    
            if (response.data.success === true) {
                updatedUserCnic(response.data.userId)
                router.replace("/login");
            }
        } catch (error) {
            console.log("Error:", error);
            toast.error("Registration Error");
        }

        
    };

   



    return (
        <>
            <div className="flex justify-center m-4 ">
                <form onSubmit={handleSubmit}
                    className="w-full p-8 bg-gray-100 border border-blue-400 rounded-lg shadow-lg py-7"
                >
                    <h1 className="flex items-center justify-center font-sans text-2xl font-bold text-blue-500 border-b-4 border-blue-700 ">
                        PARTENER&apos;S DETAILS
                    </h1>

                    <div className="p-3 m-2 border-2 border-red-400 rounded-md ">
                        <p><span className="text-red-600 ">NOTE:</span><br />
                            Please ensure all information provided in this
                            form is accurate as it cannot be changed once
                            submitted. Double-check your entries before proceeding.
                            If you have any questions, contact our support team for
                            assistance. Thank you for your attention to detail.
                        </p>
                    </div>

                    <div className="mt-4 mb-4">

                        <label
                            className="block pb-1 mx-2 text-sm text-gray-500"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            required
                            ref={partner_cnic_name}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="CNIC NAME"
                            type="name"
                            id="name"
                            defaultValue={name}
                            disabled
                            
                        />
                    </div>
                    <div className="mt-4 mb-4">

                        <label
                            className="block pb-1 mx-2 text-sm text-gray-500"
                            htmlFor="father name"
                        >
                            Father Name
                        </label>
                        <input
                            required
                            ref={partner_father_name}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="CNIC FATHER NAME"
                            type="name"
                            id="father name"
                            
                        />
                    </div>
                    <div className="mt-4 mb-4">

                        <label
                            className="block pb-1 mx-2 text-sm text-gray-500"
                            htmlFor="number"
                        >
                            Mobile Nmber
                        </label>
                        <input
                            required
                            ref={partner_mobile}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="03*********"
                            type="number"
                            id="number"
                            
                        />
                    </div>
                    <div className="mt-4 mb-4">

                        <label
                            className="block pb-1 mx-2 text-sm text-gray-500"
                            htmlFor="email"
                        >
                            E-mail
                        </label>
                        <input

                            required
                            ref={partner_email}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            // placeholder="REGISTERED EMAIL EMAIL"
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={email}
                            disabled
                           
                        />
                    </div>
                    <div className="mt-4 mb-4">

                        <label
                            className="block pb-1 mx-2 text-sm text-gray-500"
                            htmlFor="date"
                        >
                            Date Of Birth
                        </label>
                        <input
                            required
                            ref={partner_dob}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="dd/mm/yyyy"
                            type="date"
                            id="date"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="status"
                        >
                            Martial Status
                        </label>
                        <input


                            required
                            ref={partner_status}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="MARRIED / SINGLE"
                            type="text"
                            id="status"
                           
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input


                            required
                            ref={partner_city}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="YOUR CITY"
                            type="text"
                            id="city"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="cnic number"
                        >
                            CNIC Number
                        </label>
                        <input


                            required
                            ref={partner_cnic_number}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="4****-*******-*"
                            type="number"
                            id="cnic number"
                           
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="cnic expiry"
                        >
                            CNIC Expired Date
                        </label>
                        <input


                            required
                            ref={partner_cnic_expiry_date}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="dd/mm/yyyy"
                            type="date"
                            id="cnic expiry"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="address"
                        >
                            Residential Address
                        </label>
                        <input


                            required
                            ref={partner_home_address}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="YOUR BRIEF ADDRESS"
                            type="text"
                            id="address"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="relative name"
                        >
                            CNIC Name(Blood)
                        </label>
                        <input


                            required
                            ref={partner_blood_cnic_name}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="REALTIVE NAME"
                            type="text"
                            id="relative name"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="relative cnic number"
                        >
                            CNIC Number(Blood)
                        </label>
                        <input


                            required
                            ref={partner_blood_cnic_number}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="REALTIVE CNIC NUMBER"
                            type="number"
                            id="relative cnic number"
                           
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="relation"
                        >
                            CNIC Blood(Relation)
                        </label>
                        <input


                            required
                            ref={partner_blood_relation}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="BROTHER, SISTER, etc.."
                            type="text"
                            id="relation"
                            
                        />
                    </div>
                    <div className="">
                        <label
                            className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                            htmlFor="bank account number"
                        >
                            Active Bank Account Number / Easypaisa / Jazzcash
                        </label>
                        <input


                            required
                            ref={partner_bank_account}
                            className="w-full p-3 text-sm border rounded-lg border-black-200"
                            placeholder="000000000000"
                            type="number"
                            id="bank account number"
                           
                        />
                    </div>

                    <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md  transition-all mt-3"
            >
              Submit
            </button>


                </form>
            </div>
        </>
    )
}

export default Page