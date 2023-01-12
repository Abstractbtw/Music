import React from 'react'
import './list.css'
import { NavLink, useParams } from 'react-router-dom'


function List() {

  const params = useParams()
  const listName = params.name

  return (
    <div className="list">
      {listName}

      {listName === "cpu" ? (
        <div>
          <NavLink to="./i310100"><button>i3 10100</button></NavLink>
          <br />
          <NavLink to="./r52600"><button>r5 2600</button></NavLink>
          <br />
          <NavLink to="./i912900"><button>i9 12900</button></NavLink>
        </div>
      ) : ""}

      {listName === "gpu" ? (
        <div>
          <NavLink to="./gtx1660"><button>gtx1660</button></NavLink>
          <br />
          <NavLink to="./rx570"><button>rx570</button></NavLink>
          <br />
          <NavLink to="./rtx2080"><button>rtx2080</button></NavLink>
        </div>
      ) : ""}

      {listName === "psu" ? (
        <div>
          <NavLink to="./500w"><button>500w</button></NavLink>
          <br />
          <NavLink to="./650w"><button>650w</button></NavLink>
          <br />
          <NavLink to="./400w"><button>400w</button></NavLink>
        </div>
      ) : ""}
    </div>
  )
}

export default List