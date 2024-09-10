'use client';
import React, { useState, useRef, useContext, useEffect } from 'react';
// import fetchData from "../../utils/core";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '@/app/store/Context';

const Page = () => {
  const router = useRouter();

  const partner_cnic_name = useRef('');
  const partner_father_name = useRef('');
  const partner_mobile = useRef('');
  const partner_email = useRef('');
  const partner_dob = useRef('');
  const partner_status = useRef('');
  const partner_city = useRef('');
  const partner_cnic_number = useRef('');
  const partner_cnic_expiry_date = useRef('');
  const partner_home_address = useRef('');
  const partner_blood_cnic_name = useRef('');
  const partner_blood_cnic_number = useRef('');
  const partner_blood_relation = useRef('');
  const partner_bank_account = useRef('');

  const [userError, setUserError] = useState('');
  const { email, name, isRegistered, updatedUserCnic } =
    useContext(AuthContext);
  useEffect(() => {
    if (!isRegistered) {
      router.replace('/register');
    }

    if ((email, name)) {
      partner_email.current.value = email; // Set default value
      partner_cnic_name.current.value = name;
    }
  }, [email, name]);

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
        partner_blood_cnic_number: partner_blood_cnic_number.current.value,
        partner_blood_relation: partner_blood_relation.current.value,
        partner_bank_account: partner_bank_account.current.value,
        partner_father_name: partner_father_name.current.value,
      };

      const response = await axios.post(
        'https://oneclick-server-x09s.onrender.com/api/v1/auth/partner-datail',
        partnerData,
        { withCredentials: true }
      );
      console.log('partner-info response: ', response);

      if (!response) {
        setUserError('error');
        console.log('Invalid response from server');
        return;
      }

      if (response.success === false) {
        setUserError('error');
        console.log('User already exists');
        return;
      } else {
        toast.success(response.message); // Display success message from API
      }

      if (response.data.success === true) {
        updatedUserCnic(response.data.userId);
        router.replace('/login');
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error('Registration Error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="detailsbox">
          <div className="boxheader">
            <h3>PARTNER'S DETAILS</h3>
            <p>
              <span className="text-red-600">NOTE:</span>
              <br />
              Please ensure all information provided in this form is accurate,
              as it cannot be changed once submitted. Double-check your entries
              before proceeding. If you have any questions, please contact our
              support team for assistance. Thank you for your attention to
              detail.
            </p>
          </div>
          <div className="boxbody p-6">
            <div>
              <h6>User Information</h6>
              <div className="formdetails space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      required
                      placeholder="Name as per CNIC"
                      type="text"
                      id="name"
                      ref={partner_cnic_name}
                      defaultValue={name}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="father-name">Father's Name</label>
                    <input
                      required
                      placeholder="Father's Name as per CNIC"
                      type="text"
                      id="father-name"
                      ref={partner_father_name}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="number">Mobile Number</label>
                    <input
                      required
                      placeholder="03XXXXXXXXX"
                      type="number"
                      id="number"
                      ref={partner_mobile}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      required
                      placeholder="Registered Email"
                      type="email"
                      id="email"
                      name="email"
                      ref={partner_email}
                      defaultValue={email}
                      disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="date">Date of Birth</label>
                    <input
                      required
                      placeholder="DD/MM/YYYY"
                      type="date"
                      id="date"
                      ref={partner_dob}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Marital Status</label>
                    <input
                      required
                      placeholder="Married / Single"
                      type="text"
                      id="status"
                      ref={partner_status}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="city">City of Residence</label>
                    <input
                      required
                      placeholder="Your City"
                      type="text"
                      id="city"
                      ref={partner_city}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Residential Address</label>
                    <input
                      required
                      placeholder="Your Complete Address"
                      type="text"
                      id="address"
                      ref={partner_home_address}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="cnic-number">CNIC Number</label>
                    <input
                      required
                      placeholder="4****-*******-*"
                      type="number"
                      id="cnic-number"
                      ref={partner_cnic_number}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cnic-expiry">CNIC Expiry Date</label>
                    <input
                      required
                      placeholder="DD/MM/YYYY"
                      type="date"
                      id="cnic-expiry"
                      ref={partner_cnic_expiry_date}
                    />
                  </div>
                </div>
              </div>
              <hr className="my-6" />
              <h6>Blood Relative Details</h6>
              <div className="formdetails space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="relative-name">
                      Relative's Full Name (as per CNIC)
                    </label>
                    <input
                      required
                      placeholder="Relative's Full Name"
                      type="text"
                      id="relative-name"
                      ref={partner_blood_cnic_name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="relative-cnic-number">
                      Relative's CNIC Number
                    </label>
                    <input
                      required
                      placeholder="Relative's CNIC Number"
                      type="number"
                      id="relative-cnic-number"
                      ref={partner_blood_cnic_number}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="form-group">
                    <label htmlFor="relation">Relationship with Relative</label>
                    <input
                      required
                      placeholder="Brother, Sister, etc."
                      type="text"
                      id="relation"
                      ref={partner_blood_relation}
                    />
                  </div>
                </div>
              </div>
              <hr className="my-6" />
              <h6>Bank Account Details</h6>
              <div className="formdetails space-y-6">
                <div className="form-group">
                  <label htmlFor="bank-account-number">
                    Active Bank Account / Easypaisa / Jazzcash Number
                  </label>
                  <input
                    required
                    placeholder="Enter Your Account Number"
                    type="number"
                    id="bank-account-number"
                    ref={partner_bank_account}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="save">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
