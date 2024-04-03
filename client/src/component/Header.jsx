import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    return (
        <header
            className={`fixed top-0 z-10 flex w-screen justify-center bg-white py-4 ${hasShadow ? 'shadow-md' : ''
                }`}
        >
            <div
                className={`flex ${showSearchBar ? 'justify-around' : 'justify-between px-10'
                    } w-screen max-w-screen-xl`}
            >
                <a href="/" className="flex items-center gap-1">
                    <img
                        className="h-8 w-8 md:h-10 md:w-10"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxORUgwXSbsbk3JZURzs9n5mxgtwLfRMVmVw&s"
                        alt=""
                    />

                    <span className="hidden text-2xl font-bold text-red-500 md:block">
                        airbnb
                    </span>
                </a>
            </div>

        </header >
    )
}
