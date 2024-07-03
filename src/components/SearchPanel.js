import React from 'react'

export default function SearchPanel() {
    const arr=[1,2,3,4,5,6,7]
    function func(x){
        return (
            <a href="/" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
        )
    }
  return (
    <div className="list-group">
      {
        arr.map(func)
      }
      
    </div>
  )
}
