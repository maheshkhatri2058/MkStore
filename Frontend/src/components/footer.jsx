import React from "react";

const footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section class="mb-4">
            <a
              data-mdb-ripple-init
              className="btn text-black btn-center m-1"
              style={{ backgroundColor: "#3b5998",borderRadius:"50%" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-black btn-center m-1"
              style={{ backgroundColor: " #55acee",borderRadius:"50%"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-center m-1"
              href="#!"
              style={{ backgroundColor: "#dd4b39",borderRadius:"50%"}}
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-center m-1"
              href="#!"
              style={{ backgroundColor: "#ac2bac",borderRadius:"50%"}}
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-center m-1"
              href="#!"
              style={{ backgroundColor: " #0082ca",borderRadius:"50%"}}
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a data-mdb-ripple-init  className="btn text-white btn-center m-1"   href="#!" role="button"style={{ backgroundColor: "#333333", borderRadius:"50%"}}>
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          ©2024 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            MkBookStoree
          </a>
        </div>
      </footer>
    </>
  );
};

export default footer;
