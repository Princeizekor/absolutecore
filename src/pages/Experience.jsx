import React, { useState } from 'react'

function Experience() {
  const [files, setFile] = useState(null)
  const handleFiles = (e) => {
    setFile(e.target.files[0])
  }
  const handleUpload = () => {
    
  }
  return (
    <div>
      <input type="file" name="images" id="image" onChange={handleFiles}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Experience
