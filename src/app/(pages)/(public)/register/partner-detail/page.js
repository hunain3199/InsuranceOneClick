'use client';
import React, { useState, useRef, useContext, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '@/app/store/Context';
import emptyProfilePic from '@public/assets/BlankProfile/img.png';

const Page = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(emptyProfilePic);

  const profilePic = useRef(null);
  const partner_cnic_name = useRef(null);
  const partner_father_name = useRef(null);
  const partner_mobile = useRef(null);
  const partner_email = useRef(null);
  const partner_dob = useRef(null);
  const partner_status = useRef(null);
  const partner_city = useRef(null);
  const partner_cnic_number = useRef(null);
  const partner_cnic_expiry_date = useRef(null);
  const partner_home_address = useRef(null);
  const partner_blood_cnic_name = useRef(null);
  const partner_blood_cnic_number = useRef(null);
  const partner_blood_relation = useRef(null);
  const partner_bank_account = useRef(null);

  const { email, name, isRegistered, updatedUserCnic } =
    useContext(AuthContext);

  useEffect(() => {
    if (!isRegistered) {
      // router.replace('/register');
    }

    if (email && name) {
      // partner_email.current.value = email;
      partner_email.current.value = 'XYZ@gmail.com';
      // partner_cnic_name.current.value = name;
      partner_cnic_name.current.value = 'XYZ';
    }
  }, [email, name, isRegistered, router]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if the selected file is an image
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error('Please select a valid image file');
      e.target.value = '';
      setSelectedImage(emptyProfilePic);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Image handling
    if (profilePic.current.files[0]) {
      const blob = new Blob([profilePic.current.files[0]], {
        type: profilePic.current.files[0].type,
      });
      formData.append(
        'partner_profile_picture',
        blob,
        profilePic.current.files[0].name
      );
    } else {
      toast.error('Please upload a profile picture.');
      return;
    }

    // Collecting form data
    formData.append('partner_cnic_name', partner_cnic_name.current.value);
    formData.append('partner_father_name', partner_father_name.current.value);
    formData.append('partner_mobile', partner_mobile.current.value);
    formData.append('partner_email', partner_email.current.value);
    formData.append('partner_dob', partner_dob.current.value);
    formData.append('partner_status', partner_status.current.value);
    formData.append('partner_city', partner_city.current.value);
    formData.append('partner_cnic_number', partner_cnic_number.current.value);
    formData.append(
      'partner_cnic_expiry_date',
      partner_cnic_expiry_date.current.value
    );
    formData.append('partner_home_address', partner_home_address.current.value);
    formData.append(
      'partner_blood_cnic_name',
      partner_blood_cnic_name.current.value
    );
    formData.append(
      'partner_blood_cnic_number',
      partner_blood_cnic_number.current.value
    );
    formData.append(
      'partner_blood_relation',
      partner_blood_relation.current.value
    );
    formData.append('partner_bank_account', partner_bank_account.current.value);

    // Log FormData content
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // Sending the request
    try {
      const response = await axios.post(
        'https://oneclick-server-x09s.onrender.com/api/v1/auth/partner-detail',
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        updatedUserCnic(response.data.userId);
        router.replace('/login');
      } else {
        toast.error(response.data.message || 'User already exists');
      }
    } catch (error) {
      if (error.response) {
        console.error('Response data:', error.response.data);
        toast.error(error.response.data.message || 'Registration Error');
      } else {
        console.error('Error:', error);
        toast.error('Registration Error');
      }
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-100 shadow-lg flex flex-col min-w-0 border border-black/[.15] rounded-md mx-5 my-12">
          <div className="boxheader p-5 bg-white rounded-t-md shadow-md">
            <h3 className="text-[rgb(50,50,93)] text-lg md:text-2xl font-semibold leading-[25.5px] m-0 p-0 text-center">
              PARTNER&apos;S DETAILS
            </h3>
            <p className="pt-4 pb-1 text-xs sm:text-[0.65rem] leading-6 tracking-wide uppercase text-[#8898aa] font-semibold text-justify">
              <span className="text-red-600">NOTE:</span>
              <br />
              Please ensure all information provided in this form is accurate,
              as it cannot be changed once submitted. Double-check your entries
              before proceeding. If you have any questions, please contact our
              support team for assistance. Thank you for your attention to
              detail.
            </p>
          </div>
          <div className="flex-1 min-h-[1px] p-6">
            <div className="md:pl-6 pl-0">
              <h6 className="pt-1 pb-1 mb-6 text-base sm:text-2xl uppercase text-[#8898aa] font-semibold leading-6 tracking-wide ">
                User Information
              </h6>
              <div className="grid grid-cols-1 items-center mb-6">
                <div className="flex sm:flex-row flex-col items-start gap-5 justify-center sm:items-center">
                  <div className="shrink-0">
                    <Image
                      className="h-16 w-16 object-cover rounded-full"
                      src={selectedImage}
                      alt="Profile photo"
                      width={64}
                      height={64}
                    />
                  </div>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      required
                      type="file"
                      accept="image/*"
                      ref={profilePic}
                      className="block w-full text-sm text-slate-500
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    htmlFor="name"
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Name as per CNIC"
                    type="text"
                    id="name"
                    ref={partner_cnic_name}
                    // defaultValue={name}
                    defaultValue={'XYZ'}
                    disabled
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="father-name"
                  >
                    Father&apos;s Name
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Father's Name as per CNIC"
                    type="text"
                    id="father-name"
                    ref={partner_father_name}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="number"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="03XXXXXXXXX"
                    type="tel"
                    id="number"
                    ref={partner_mobile}
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Registered Email"
                    type="email"
                    id="email"
                    ref={partner_email}
                    // defaultValue={partner_email}
                    defaultValue={'XYZ@gmail.com'}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="date"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    type="date"
                    id="date"
                    ref={partner_dob}
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="status"
                  >
                    Marital Status
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Married / Single"
                    type="text"
                    id="status"
                    ref={partner_status}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="city"
                  >
                    City of Residence
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Your City"
                    type="text"
                    id="city"
                    ref={partner_city}
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="address"
                  >
                    Residential Address
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Your Complete Address"
                    type="text"
                    id="address"
                    ref={partner_home_address}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="cnic-number"
                  >
                    CNIC Number
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="4****-*******-*"
                    type="text"
                    id="cnic-number"
                    ref={partner_cnic_number}
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="cnic-expiry"
                  >
                    CNIC Expiry Date
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    type="date"
                    id="cnic-expiry"
                    ref={partner_cnic_expiry_date}
                  />
                </div>
              </div>
              <hr className="my-6" />
              <h6 className="pt-1 pb-1 mb-6 text-base sm:text-2xl uppercase text-[#8898aa] font-semibold leading-6 tracking-wide ">
                Blood Relative Details
              </h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="relative-name"
                  >
                    Relative&apos;s Name
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Relative's Name"
                    type="text"
                    id="relative-name"
                    ref={partner_blood_cnic_name}
                  />
                </div>
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="relative-number"
                  >
                    Relative&apos; CNIC Number
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="4****-*******-*"
                    type="text"
                    id="relative-number"
                    ref={partner_blood_cnic_number}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="relation"
                  >
                    Relation
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Your Relation"
                    type="text"
                    id="relation"
                    ref={partner_blood_relation}
                  />
                </div>
              </div>
              <hr className="my-6" />
              <h6 className="pt-1 pb-1 mb-6 text-base sm:text-2xl uppercase text-[#8898aa] font-semibold leading-6 tracking-wide ">
                Bank Account Details
              </h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-0 md:mb-6">
                  <label
                    className="text-[#525f7f] text-sm font-semibold inline-block mb-2"
                    htmlFor="bank-account"
                  >
                    Bank Account Number
                  </label>
                  <input
                    className="shadow-md border-0 text-sm block w-full h-[calc(1.5em+1.25rem+2px)] p-2.5 font-normal leading-6 text-[#8898aa] bg-white bg-clip-padding rounded-md focus:outline-none focus:text-black focus:shadow-lg focus:transition-shadow focus:duration-150"
                    required
                    placeholder="Bank Account Number"
                    type="text"
                    id="bank-account"
                    ref={partner_bank_account}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 float-right rounded-lg hover:bg-green-800 transition ease-in-out duration-500 mt-5"
            >
              Submit
            </button>
            {/* </div> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
