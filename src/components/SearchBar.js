import React from 'react'

export default function SearchBar() {
  return (
    <div className="row">
              <div className="col-2 d-lg-none ">
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <i class="bi bi-list"></i>
</button>

<div class="offcanvas offcanvas-start w-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
  </div>
</div>
              </div>
              <div className="col-10 col-md-8 ">
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
                    <button type="button" class="btn  shadow btn-primary">
                      Department
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary shadow dropdown-center dropdown-toggle dropdown-toggle-split"
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
                  <div class="btn-group  px-4 dropdown-center">
                    <button type="button" class="btn shadow btn-primary">
                      Author
                    </button>
                    <button
                      type="button"
                      class="btn shadow btn-primary dropdown-center dropdown-toggle dropdown-toggle-split"
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
                    <button type="button" class="btn shadow btn-primary">
                      Genre
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary shadow dropdown-center dropdown-toggle dropdown-toggle-split"
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
  )
}
