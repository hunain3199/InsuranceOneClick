import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import '@/app/globals.css';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import BankAlfalah from '@public/assets/PaymentIcon/bankalfalah.svg';
import MasterCard from '@public/assets/PaymentIcon/master-card.svg';
import Union from '@public/assets/PaymentIcon/unionpay.svg';
import Visa from '@public/assets/PaymentIcon/visa-logo.svg';
import Logo from '@public/assets/Logo/main-logo.svg';
import Secp from '@public/assets/Logo/secp.svg';
import SSL from '@public/assets/PaymentIcon/ssl.svg';
import Norton from '@public/assets/PaymentIcon/norton.svg';
import '@/app/globals.css';
import Plains from './Plain';

function Footer() {
  return (
    <>
      <Plains />
      <footer className="p-5 bg-image-two">
        <div className="my-0 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
            <div className="flex-1 lg:w-1/3 lg:flex-none">
              <Link href={'/'}>
                <Image src={Logo} className="w-20 sm:w-28" alt="Logo" />
              </Link>

              <p className="mt-2.5 text-neutral-700">
                OneClick Digital Offers customized insurance solutions to meet
                your specific needs, whether it&apos;s for your home, car,
                health, business, or life. We work with you to create a policy
                that fits your unique situation.
              </p>

              <p className="mt-2.5 text-neutral-700 flex">
                Seal of Registrar of Company
                <span>
                  <Image src={Secp} className="footer-secp" alt="SECP" />
                </span>
              </p>

              <div>
                <Link href={'/'}>
                  <WhatsApp className="mr-2.5 text-2xl text-neutral-600" />
                </Link>
                <Link href={'/'}>
                  <Facebook className="mr-2.5 text-2xl text-neutral-600" />
                </Link>
                <Link href={'/'}>
                  <Instagram className="mr-2.5 text-2xl text-neutral-600" />
                </Link>
                <Link href={'/'}>
                  <LinkedIn className="mr-2.5 text-2xl text-neutral-600" />
                </Link>
                <Link href={'/'}>
                  <Twitter className="mr-2.5 text-2xl text-neutral-600" />
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="font-bold mb-2.5 uppercase">Quick Links</h3>
                  <Link
                    href={'/'}
                    className="block mt-1 text-gray-800 text-sm no-underline hover:underline"
                  >
                    Car Insurance
                  </Link>
                  <Link
                    href={'/'}
                    className=" block mt-1 text-gray-800 text-sm no-underline hover:underline"
                  >
                    Bike Insurance
                  </Link>
                  <Link
                    href={'/'}
                    className=" block mt-1 text-gray-800 text-sm no-underline hover:underline"
                  >
                    Health Insurance
                  </Link>
                  <Link
                    href={'/'}
                    className=" block mt-1 text-gray-800 text-sm no-underline hover:underline"
                  >
                    Travel Insurance
                  </Link>
                  <Link
                    href={'/'}
                    className=" block mt-1 text-gray-800 text-sm no-underline hover:underline"
                  >
                    Life Insurance
                  </Link>
                </div>

                <div>
                  <h3 className="font-bold mb-2.5 uppercase">Payment Method</h3>
                  <div className="flex sm:flex-wrap xl:flex-col">
                    <Image src={Visa} alt="Visa_Logo" className="w-16 mt-1" />
                    <Image
                      src={MasterCard}
                      alt="Master-Card"
                      className="w-16 mt-1"
                    />
                    <Image
                      src={BankAlfalah}
                      alt="Bank-Alf"
                      className="w-16 mt-1"
                    />
                    <Image src={Union} alt="Union_Pay" className="w-16 mt-1" />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2.5 uppercase">Secured By</h3>
                  <div className="flex sm:flex-wrap xl:flex-col">
                    <Image src={SSL} alt="ssl_secure" className="w-16 mt-1" />
                    <Image
                      src={Norton}
                      alt="norton_secure"
                      className="w-16 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2.5 uppercase">Contact Us</h3>
                  <p className="mt-1 text-gray-800 text-sm">+92 322 828 7111</p>
                  <p className="mt-1 text-gray-800 text-sm">+92 315 396 6678</p>
                  <p className="mt-1 text-gray-800 text-sm">
                    info@theoneclickdigital.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px opacity-0 my-3 mx-0" />

          <div>
            <p className="text-xs sm:text-base text-neutral-700">
              R-489, Block 16, FB Area, Karachi Pakistan
            </p>
            <p className="text-xs sm:text-base text-neutral-700">
              © OneClickDigital 2024 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
