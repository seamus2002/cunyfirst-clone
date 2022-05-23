const NewInstructorView = (props) => {
  const { handleChange, handleSubmit } = props;
  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            New Instructor
          </h2>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First name: </label>
          <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Department: </label>
          <input type="text" name="department" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}> ImageUrl: </label>
          <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <button type="submit">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}

export default NewInstructorView;