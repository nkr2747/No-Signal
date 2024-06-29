document.body.style.overflow = "hidden";
function App() {
  return (
    <>
      <div className="container-fluid h-100 ">
        <div className="row">
          <div
            className="col-3 bg-primary-subtle"
            style={{
              height: "100vh",
            }}
          >
            <nav class="navbar my-4 navbar-expand-lg rounded bg-body-tertiary">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse flex-column navbar-collapse"
                  id="navbarTogglerDemo01"
                  style={{
                    height: "90vh",
                  }}
                >
                  <a class="navbar-brand" href="/">
                    Hidden brand
                  </a>
                  <ul class="navbar-nav me-auto flex-column mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div
            className="col-9 bg-primary-subtle py-4"
            style={{
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <div className="row">
              <div className="col col-md-8 ">
                <form class="" role="search">
                  <input
                    class="form-control shadow me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="row my-2">
                <div className="col">
                  <button class="btn shadow btn-outline-primary" type="submit">
                    Search
                  </button>
                  <div class="btn-group px-4 dropdown-center">
                    <button type="button" class="btn btn-primary">
                      Department
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dropdown-center dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Department
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group px-4 dropdown-center">
                    <button type="button" class="btn btn-primary">
                      Author
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dropdown-center dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Genre
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group px-4 dropdown-center">
                    <button type="button" class="btn btn-primary">
                      Genre
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dropdown-center dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-4">
              <h4>New Arrivals</h4>
              <div
                className="overflow-x-auto my-2"
                style={{
                  overflowX: "scroll",
                  overflowY: "hidden", // Ensure vertical scrolling is disabled
                  // whiteSpace: "nowrap", // Prevent items from wrapping to the next line
                }}
              >
                <div
                  style={{
                    height: "25rem",
                    display: "inline-flex", // Use inline-flex to keep items in a row
                    alignItems: "center", // Center items vertically
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div className="d-inline-block mx-4" key={index}>
                      <div
                        className="card"
                        style={{
                          width: "10rem",
                        }}
                      >
                        <img
                          src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Some quick example</p>
                          <a href="/" className="btn btn-primary">
                            Issue
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container my-4">
              <h4>Recommended for You</h4>
              <div
                className="overflow-x-auto my-2"
                style={{
                  overflowX: "scroll",
                  overflowY: "hidden", // Ensure vertical scrolling is disabled
                  // whiteSpace: "nowrap", // Prevent items from wrapping to the next line
                }}
              >
                <div
                  style={{
                    height: "25rem",
                    display: "inline-flex", // Use inline-flex to keep items in a row
                    alignItems: "center", // Center items vertically
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div className="d-inline-block mx-4" key={index}>
                      <div
                        className="card"
                        style={{
                          width: "10rem",
                        }}
                      >
                        <img
                          src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Some quick example</p>
                          <a href="/" className="btn btn-primary">
                            Issue
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
