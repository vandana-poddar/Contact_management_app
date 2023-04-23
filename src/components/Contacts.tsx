import React, { useState } from "react";
import Navbar from "./Navbar";
import { Icontact, dummylist } from "./ContactType";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const Contacts = () => {
  const [contactList, setContactList] = useState(dummylist as Icontact[]);

  return (
    <div>
      <Navbar />
      <AddContact
        onSubmitClickHnd={function (data: Icontact): void {
          throw new Error("Function not implemented.");
        }}
      />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp;
      <ContactList list={contactList} />
    </div>
  );
};

export default Contacts;
