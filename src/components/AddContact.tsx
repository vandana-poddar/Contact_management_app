import React, { useState } from "react";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
      <div className="text-4xl pt-20">CONTACT MANAGEMENT</div>
      <div className="block">
        <button
          className="bg-slate-100 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          create Contacts
        </button>

        {showModal ? (
          <>
            <div className="flex  items-center overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Create Contact</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block  ">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        First Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm font-bold mb-1">
                        Last Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm font-bold mb-1">
                        Status
                      </label>
                      <input type="radio" name="type" value="Active" />
                      Active &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="radio" name="type" value="Inactive" />
                      Inactive
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-slate-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ContactForm;
