const AddUser = ({handleAddFormChange, handleAddFormSubmit}) => {
    return (
    <div>
        <h2>Add a Contact</h2>
        <form action="" onSubmit={handleAddFormSubmit} >
          <input 
          type="text"
          name="fullName" 
          id="" required="required" 
          placeholder='Enter a name' 
          onChange={handleAddFormChange}
          />
          <input 
          type="text" 
          name="address" 
          id="" required="required" 
          placeholder='Enter the address' 
          onChange={handleAddFormChange}

          />
          <input 
          type="text" 
          name="phoneNumber" 
          id="" required="required" 
          placeholder='Enter a Phone Number' 
          onChange={handleAddFormChange}

          />
          <input 
          type="email" 
          name="email" 
          id="" required="required" 
          placeholder='Enter an email' 
          onChange={handleAddFormChange}
          />
          <button type='submit'>Add</button>
        </form>
    </div>
    );
}

export default AddUser;