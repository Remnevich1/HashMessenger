import React, { useState } from 'react'
import env from '../env.json'

function Create() {

  const [url, setUrl] = useState('')
  const [lineClass, setLineClass] = useState('hide')
  const [formClass, setFormClass] = useState('')

  let sendData = (obj) => {
    setFormClass('hide')
    setLineClass('')
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (response.result) {
        setUrl(env.url + '/' + response.url)
      }
    })
  }

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === ' ') {
      alert('Заполните поля');
      return false
    }
    sendData({"note": note});
  }

    return (
      <div className="container screen2">
         <form onSubmit={loadDataFromForm} className={formClass}>
           <div className="form-group">
           <label htmlFor="" className="form-group">Write a note</label>
           <textarea name="note" className="form-control" id="note" defaultValue="Write a message" rows="3"></textarea>
           </div>
           <div className="rightSide">
           <button type="submit" className="btn btn-primary">Create</button>
           </div>
         </form>
         <div className={lineClass}>
           {url}
           <div>
             <button className="btn btn-primary" onClick={function(){window.location.reload()}}>Create new note</button>
           </div>
         </div> 
      </div>
    );
  }
  
  export default Create;