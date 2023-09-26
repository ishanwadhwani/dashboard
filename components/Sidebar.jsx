'use client'
import React, { useContext } from "react";
import { GlobalContext } from "../context/index";
import { menuItems } from "../constants/data";
import Link from "next/link";

const Sidebar = () => {
  const {sideBarOpen, setSideBarOpen} = useContext(GlobalContext);
  return (
    <aside 
      className={`absolute left-0 top-0 z-9999 flex h-screen 
        w-72 flex-col overflow-y-hidden bg-[#3C83F9] duration-300 ease-linear
        lg:translate-x-0 ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
          <Link
            href={"/"}
            className='text-[40px] text-white'>
            Board.
          </Link>
        </div>
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <ul className="mb-6 flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Link href={item.link}>
                      <label 
                        className="group relative cursor-pointer flex items-center gap-2 rounded-sm py-2 px-4 font-medium
                        text-white duration-300 ease-in-out hover:bg-gray-600">
                        <span className="text-2xl">
                          {item.icon}
                        </span>
                        <span className="text-lg">{item.name}</span>
                      </label>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
    </aside>
  );
};

export default Sidebar;
