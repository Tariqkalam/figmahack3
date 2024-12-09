import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl">
    {/* Footer Grid Section */}
    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
      {/* Company Info */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Company Info
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Carrier
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              We Are Hiring
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
      {/* Legal */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Legal
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Carrier
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              We Are Hiring
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
      {/* Features */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Features
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Business Marketing
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              User Analytics
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Live Chat
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Unlimited Support
            </a>
          </li>
        </ul>
      </div>
      {/* Subscribe Form */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Get In Touch
        </h2>
        <form className="flex space-x-3">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex flex-col md:flex-row justify-between items-center">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
        Made with love in Finland. All Rights Reserved.
      </span>
      <div className="flex mt-4 md:mt-0 space-x-5">
        {/* Social Icons */}
        <a
          href="#"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer