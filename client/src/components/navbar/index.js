function Navbar() {
  return (
    <>
      <header>
        <div className="jumbotron jumbotron-fluid header-section ">
          <div className="container">
            <h1 className="display-4">Sam Roberson</h1>
            <div className="row">
              <div className="col-sm-8"></div>
              <div className="col-sm-4">
                <nav className="navbar navbar-expand-lg navbar-dark  w-100">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse w-100"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav nav-fill mx-auto">
                      <a
                        className="nav-link active red-background mr-2"
                        href="#contact"
                        id=""
                      >
                        Contact
                      </a>
                      <a
                        className="nav-link active red-background mr-2"
                        href="#projects"
                      >
                        Projects
                      </a>
                      <a
                        className="nav-link active red-background mr-2"
                        href="./assets/images/Resume.pdf"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
