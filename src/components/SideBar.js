import React from 'react'

export default function SideBar() {
  return (
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
  )
}
