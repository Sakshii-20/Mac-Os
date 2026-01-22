import React from 'react'
import './Nav.scss'
import DateTime from './DateTime'
const Nav = () => {
  return (
   <nav>
    <div className="left"> <div className="apple-icon"><img src='https://www.shareicon.net/data/2015/08/10/82824_apple_4096x4096.png'/></div>
    <div className="nav-item"> <p>Sakshi Mhaske</p></div>
    <div className="nav-item">File</div>
    <div className="nav-item"><p>Window</p></div>
    <div className='nav-item'><p>Terminal</p></div>
    </div>
    <div className="right">
      <div className="nav-icon"><img src='https://www.bing.com/th/id/OIP.rwOo1YWXB3EGI_LKzyYGwAHaH_?w=186&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/></div>
    <div className="nav-item">
      <DateTime/>
    </div>
    </div>
   </nav>
  )
}

export default Nav
