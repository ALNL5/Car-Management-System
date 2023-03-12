import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
              <ul className='dropdown-menu'>
                <li><Link className='dropdown-item' to={'/manufacturers'}>Manufacturers</Link></li>
                <li><Link className='dropdown-item' to={'/models'}>Models</Link></li>
                <li><Link className='dropdown-item' to={'/automobiles'}>Automobiles</Link></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <ul className='dropdown-menu'>
                <li><Link className='dropdown-item' to='/technicians'>Technicians</Link></li>
                <li><Link className='dropdown-item' to='/appointments'>Appointments</Link></li>
                <li><Link className='dropdown-item' to='/service-history'>Service history</Link></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</a>
              <ul className='dropdown-menu'>
                <li><NavLink className='dropdown-item' to='/sales/employees/'>Sales People</NavLink></li>
                <li><NavLink className='dropdown-item' to='/sales/customers/'>Customers</NavLink></li>
                <li><NavLink className='dropdown-item' to='/sales/records/new/'>Sales Record</NavLink></li>
                <li><NavLink className='dropdown-item' to='/sales/records/'>Sales History</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
