import React from 'react'

const ReadOnly = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>
                    <button type='submit' onClick={(event)=>{handleEditClick(event,contact )}}>Edit</button>
                    <button type='submit' onClick={(event)=>{handleDeleteClick(contact.id)}}>Delete</button>
                </td>
    </tr>
  ) 
}

export default ReadOnly
