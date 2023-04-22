import React from "react";
import ContactForm from "./AddContact";

const Sidebar = () => {
  return (
    <div className="App">
      <div className="w-full h-screen flex flex-cols text-center">
        <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
          <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Contacts
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Charts and Maps
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Sidebar;
