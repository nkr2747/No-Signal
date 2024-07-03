import React from 'react'
import logo from "../images/logo.svg";
import DateTimeDisplay from "../components/DateTimeDisplay";
export default function SearchBar() {
  return (
    <div className="row mx-1  ">
            <div className="col-7 col-lg-5 position-relative ">
              <div class="input-group mb-3 position-absolute top-50 start-50 translate-middle">
                <button
                  class="btn  btn-secondary text-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor:"#F3F3F7"
                  }}
                >
                  All
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
                </ul>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>
            <div className="col-4 d-none d-lg-block  align-items-end ">
              <DateTimeDisplay/>
            </div>
            <div className="col-5 col-lg-3  position-relative">
              <div class="dropdown-center position-absolute top-50 start-50 translate-middle">
                <button
                  class="btn btn-secondary text-dark rounded-pill dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor:"#F3F3F7"
                  }}
                >
                  <img
                    src={logo}
                    class="rounded-circle"
                    alt="..."
                    height="25"
                  />
                  User
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Action three
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  )
}
