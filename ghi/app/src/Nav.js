import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/salesperson/add">
                Add a Salesperson
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/salesperson/history">
                Salespeople
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/customer/add">
                Add a Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/customer/list">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sale/add">
                Record a new Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sale/list">
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/salesperson/history">
                Salesperson History
              </NavLink>
            </li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/technicians/add">
								Add a Technician
							</NavLink>
					</li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/technicians/list">
								Technicians
							</NavLink>
					</li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/appointments/add">
								Create an appointment
							</NavLink>
					</li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/appointments/list">
								Appointments
							</NavLink>
					</li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/service/history">
								Service History
							</NavLink>
					</li>

          			<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/manufacturers/list">
								Manufacturers
							</NavLink>
					</li>

					<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/manufacturers/add">
								Add a Manufacturer
							</NavLink>
					</li>


					<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/models/list">
								Vehicle Models
							</NavLink>
					</li>

					<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/models/add">
								Add a vehicle model
							</NavLink>
					</li>
          
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/automobiles/add">
                Add a new Automobiles
              </NavLink>
          </li>
          
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/automobiles/list">
                Automobiles
              </NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
