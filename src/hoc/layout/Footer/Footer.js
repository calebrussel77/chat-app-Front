import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
    <div className="py-6 bg-gray-200 w-full border-t-2 border-gray-400">
        <div className="block md:flex md:items-center">

            <div className="block md:w-1/2 md:px-3 lg:px-6 max-w-md w-full px-2 mx-auto">
                <h3 className="text-sm md:text-base">
                    Souscrivez à <span className="font-semibold text-indigo-700">Chat-app</span>
                </h3>
                <p className="mt-3 text-xs mb-3 md:text-sm">
                    Beneficiez de l'actualité de notre plateforme ainsi que des nouveautés et mise à jour !
                </p>
                <div className="flex justify-center">
                    <input
                        className="border border-indigo-700 max-w-lg w-full p-1 rounded-md mr-3 bg-transparent placeholder-indigo-600 text-sm"
                        placeholder="Email Address"
                    />
                    <button className="text-white text-xs rounded bg-indigo-700 max-w-md w-full ml-3">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="px-4 mx-auto max-w-2xl border-t-2 border-gray-500 md:border-none w-full sm:flex items-baseline mt-4 border-t border-gray-200 pt-3 md:border-none md:w-1/2 md:px-3 lg:px-6">
                <div className="sm:w-1/3">
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        +003425772562
                    </Link>
                    <Link to="facebook.com" className="block text-xs py-2 md:text-sm">
                        chat-app@contact.fr
                    </Link>
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        FIND A STORE
                    </Link>
                </div>

                <div className="sm:w-1/3 ">
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        CONTACT US
                    </Link>
                    <Link to="facebook.com" className="block text-xs py-2 md:text-sm">
                        ORDERING & PAYMENT
                    </Link>
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        SHIPPING
                    </Link>
                    <Link to="facebook.com" className="block text-xs py-2 md:text-sm">
                        RETURNS
                    </Link>
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        FAQ
                    </Link>
                </div>

                <div className="sm:w-1/3">
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        SIZING GUIDE
                    </Link>
                    <Link to="facebook.com" className="block text-xs py-2 md:text-sm">
                        PRIVACY POLICY
                    </Link>
                    <Link to="facebook.com" className="block text-xs md:text-sm">
                        TERMS & CONDITIONS
                    </Link>
                </div>
            </div>

        </div>
    </div>
);

export default Footer;