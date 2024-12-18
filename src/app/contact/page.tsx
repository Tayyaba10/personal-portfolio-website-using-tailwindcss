import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
  return (

<section className="text-gray-600 body-font relative">

  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-5xl font-bold mb-4 text-cyan-400 underline">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">Drop me a line, give me a call, or send on a message by submitting the form.</p>
    </div>

    <div className="lg:w-1/2 md:w-2/3 mx-auto">

      <div className="flex flex-wrap -m-2">
        {/* Contact form  */}
        <div className="p-2 w-1/2">

          <div className="relative">
            <label id="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>

        </div>

        <div className="p-2 w-1/2">

          <div className="relative">
            <label id="email" className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>

        </div>

        <div className="p-2 w-full">

          <div className="relative">
            <label id="message" className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>

        </div>

        <div className="p-2 w-full">
          <button className="flex mx-auto text-black bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-400 hover:text-white rounded-full text-lg">Send message</button>
        </div>

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center text-lg">
            {/* Email  */}
          <Link href={'tayyaba.456t@gmail.com'} className="text-gray-200 hover:text-white ">tayyaba.456t@email.com</Link>

          <p className="leading-normal my-5 text-white">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>

          <span className="inline-flex">
              {/* social icons  */}
            <Link href='/' className="text-white text-2xl hover:text-gray-300">
            <FaFacebookF />
            </Link>
            <Link href={"/"} className="ml-4 text-white text-2xl hover:text-gray-300">
            <FaTwitter />
            </Link>
            <Link href={"/"} className="ml-4 text-white text-2xl hover:text-gray-300">
            <FaInstagram />
            </Link>
            <Link href={"/"} className="ml-4 text-white text-2xl hover:text-gray-300">
            <FaFacebookMessenger />
            </Link>

          </span>

        </div>
      </div>
    </div>
  </div>

</section>
  )
}
