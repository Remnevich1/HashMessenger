function Main() {
  return (
    <div className="bg-light">
    <div className="container">
      <div className="screen row">
        <div className="col-sm-4 my-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Create a note</h5>
              <p className="card-text">If you want to make a note, just go ahead!</p>
              <a href="/create" className="btn btn-primary bg-success border-success">Create a note</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Check a note</h5>
              <p className="card-text">Forgot what was written, then check it!</p>
              <a href="/note" className="btn btn-primary bg-info border-info">Check a note</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;