import React from "react";
import ContactForm from "./AddContact";
import { Link } from "react-router-dom";
import { Icontact } from "./ContactType";

const Sidebar = () => {
  return (
    <div className="App">
      <div className="w-full h-screen flex flex-cols text-center">
        <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
          <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              <li>
                <Link to="/chartsmaps">Charts And Maps</Link>
              </li>
            </div>
          </div>
        </div>
        <ContactForm
          onSubmitClickHnd={function (data: Icontact): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
