import React from "react";
const Contact = () => (
  <div>
    <div className="text">
      <h1> Contact </h1>
      <p>
        Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste
        ou pour passer le temps pendant ce confinement ? Remplissez le
        formulaire ci-dessous, je vous contacterai dès que je le peux.
      </p>
    </div>
    <form>
      <div className="mb-3">
        <label className="form-label">Titre</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
export default Contact;
