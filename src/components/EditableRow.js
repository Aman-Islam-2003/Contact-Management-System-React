import React from 'react'

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <tr>
        <td>
        <input type="text" required="required" name="FullName" placeholder='Enter a Name' value={editFormData.fullName} onChange={handleEditFormChange}/>
        </td>
        <td>
        <input type="text" required="required" name="address" placeholder='Enter address'  value={editFormData.address} onChange={handleEditFormChange}/>
        </td>
        <td>
        <input type="text" required="required" name="phoneNumber"  value={editFormData.phoneNumber} placeholder='Enter Phone Number' onChange={handleEditFormChange}/>
        </td>
        <td>
        <input type="email" required="required" name="email" placeholder='Enter email'  value={editFormData.email} onChange={handleEditFormChange}/>
        </td>
        <td>
        <button type='submit'> Save</button>
        <button type='submit' onClick={handleCancelClick}> Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow
