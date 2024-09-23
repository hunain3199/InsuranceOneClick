import React from 'react';
import Contact from '@public/assets/side-image/contact.svg';
import Image from 'next/image';
import ContactIcon from '@public/assets/Icons/contact-icon.svg';

function page() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-12 about-bg sm:mb-14 mb-5 md:mb-14 ">
        <div className="">
          <Image src={Contact} alt="contact_main_image" />
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start ">
          <h1 className="text-3xl text-neutral-500 font-extrabold mt-3 sm:text-4xl font-sans">
            Contact Us
          </h1>
          <p className="mt-1 text-neutral-600 font-sans font-semibold sm:text-md text-md">
            At <span className="text-blue">OneClickDigital</span> , it is our
            constant endeavor to provide a great customer experience. Whether
            you have questions about our services, need assistance with your
            account, or simply want to provide feedback, we&apos;re here to
            help. Our dedicated team is available to assist you with any
            inquiries you may have. Please feel free to reach out to us via
            phone or email, and we&apos;ll ensure that your needs are addressed
            promptly and efficiently. We value your feedback and look forward to
            serving you{' '}
          </p>

          <p className="bg-blue text-white px-6 py-2 mt-3 rounded-sm shadow-lg flex items-center gap-2 text-sm md:text-base lg:text-md">
            <Image src={ContactIcon} alt="contact_icon" className="w-6" />
            +92 333 242 5588
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
