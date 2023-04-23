import { type } from "os";
import React from "react";
import { Icontact } from "./ContactType";

type Props = {
  list: Icontact[];
};

const ContactList = (props: Props) => {
  const { list } = props;
  if (list.length === 0) {
    <div>
      <h1>No contacts available</h1>
      <h1>Create contacts</h1>
    </div>;
  }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((contact) => {
              return (
                <tr
                  key={contact.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact.firstName}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact.lastName}
                  </th>
                  <td className="px-6 py-4">{contact.state}</td>
                  <td>
                    <div>
                      <button
                        className="bg-slate-100 text-black active:bg-blue-500 
      font-bold px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        View
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        Edit
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 border-2 border-b-rose-500"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
