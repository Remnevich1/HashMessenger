import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {

  let { noteURL } = useParams()
  const [noteText, setNoteText] = useState('')
  const [lineClass, setLineClass] = useState('hide')
  const [formClass, setFormClass] = useState('hide')
  const [errorClass, setErrorClass] = useState('hide')

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ "url": noteURL })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          if (response.result) {
            setNoteText(response.note)
            setLineClass('')
            setFormClass('hide')
            setErrorClass('hide')
          } else if (!response.result) {
            setLineClass('hide')
            setFormClass('')
            setErrorClass('')
          }
        })
    } else {
      setLineClass('hide')
      setFormClass('')
      setErrorClass('hide')
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  return (
    <div className="bg-light">
    <div className="container screen2 bg-light">
      <div className={lineClass}>
        <h4>Note:</h4>
        <div className="form-group">{noteText}</div>
        <button className="btn btn-primary" onClick={function () { window.location.href = env.url }}>Find by another hash</button>
      </div>
      <div className={errorClass}>
      <p>Error. No such note found!!</p>
      <p>Try again</p>
      </div>
      <div className={formClass}>
        <form action="" onSubmit={getNote}>
          <div className="form-group">
          <label htmlFor="url" className="form-group">Enter hash note</label>
          <input type="text" name="url" id="url" className="form-control"/>
          </div>
          <div className="rightSide">
          <button type="submit" className="btn btn-primary">Find Note</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Note;