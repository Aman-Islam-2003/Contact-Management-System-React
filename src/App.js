import React, { useState } from 'react';
import {nanoid} from "nanoid";
import "./App.css"; 
import ReadOnly from './components/ReadOnly';
import EditableRow from './components/EditableRow';

const App = () => {
  const data = [
    {
      "id": 1,
      "fullName": "Jenny Chan",
      "address": "3 waterfoot road",
      "phoneNumber": "333-962-7516",
      "email": "jenny.chan@email.com"
    },
    {
      "id": 2,
      "fullName": "Jessica warren",
      "address": "4 tall town",
      "phoneNumber": "011-211-7516",
      "email": "jessica.warren@email.com"
    },
    {
      "id": 3,
      "fullName": "Tony Frank",
      "address": "11 lesly road",
      "phoneNumber": "788-962-7516",
      "email": "tony.frank@email.com"
    }, 
    {
      "id": 4,
      "fullName": "Tony Frank",
      "address": "11 lesly road",
      "phoneNumber": "788-962-7516",
      "email": "tony.frank@email.com"
    },
    {
      "id": 5,
      "fullName": "Tony Frank",
      "address": "11 lesly road",
      "phoneNumber": "788-962-7516",
      "email": "tony.frank@email.com"
    },
  ]
  const [contacts,setContacts] = useState(data);
  const [addFormData,setAddFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:''
  });

  const [editContactId,setEditContactId]=useState(null);
  const [editFormData,setEditFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:''
  });


  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;
    setAddFormData(newFormData);
  }

  const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData);
  }

  const handleAddFormSubmit=(event)=>{
    event.preventDefault();

    const newContact={
       id:nanoid(),
       fullName:addFormData.fullName,
       address:addFormData.address,
       phoneNumber:addFormData.phoneNumber,
       email:addFormData.email,
    }
    //  const newContacts=[...contacts,newContact];
    //  setContacts(newContacts);
    setContacts([...contacts,newContact] );
  }

  const handleEditFormSubmit=(event)=>{
    event.preventDefault();

    const editedContact={
       id:editContactId,
       fullName:editFormData.fullName,
       address:editFormData.address,
       phoneNumber:editFormData.phoneNumber,
       email:editFormData.email,
    }
  
    const newContacts=[...contacts];
    const index=contacts.findIndex((contact)=>
       contact.id===editContactId
    )
    newContacts[index]=editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  }

  const handleEditClick=(event,contact)=>{
     event.preventDefault();
     setEditContactId(contact.id);
     const formValues={
      fullName:contact.fullName,
      address:contact.address,
      phoneNumber:contact.phoneNumber,
      email:contact.email,
   }
   setEditFormData(formValues);
  }

  const handleCancelClick=()=>{
      setEditContactId(null);
  }

  const handleDeleteClick=(contactId)=>{
    const newContacts=[...contacts];
    const index=contacts.findIndex((contact)=>{
      return(
        contact.id===contactId
      )
    })

    newContacts.splice(index,1);
    setContacts(newContacts);
  }
  return (
    <div className='app-container'>
      <h2>Add a User</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="fullName" required="required" placeholder='Enter a name' onChange={handleAddFormChange}/>
        <input type="text" name="address" required="required" placeholder='Enter an address' onChange={handleAddFormChange}/>
        <input type="text" name="phoneNumber" required="required" placeholder='Enter contact#' onChange={handleAddFormChange}/>
        <input type="email" name="email" required="required" placeholder='Enter email' onChange={handleAddFormChange}/>
        <button type='submit'>Add</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact)=>(
              <>
              {editContactId===contact.id? <EditableRow editFormData={editFormData} handleCancelClick={handleCancelClick} handleEditFormChange={handleEditFormChange} />:<ReadOnly contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>} 
              </>
            ))
          }
        </tbody>
      </table>
      </form>
    </div>
  )
}

export default App;
