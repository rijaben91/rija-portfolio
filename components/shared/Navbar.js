

import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

const AppNavbar = () => {
  return(
    <div className="navbar-wrapper">
    <Navbar expand="lg" className="navbar-dark fj-mw9">
         <AppLink href="/" className="navbar-brand">RIJA</AppLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <AppLink href="/portfolios" className="mr-3 nav-link">
              Portfolios
          </AppLink>
          <AppLink href="/forum/categories" className="mr-3 nav-link">
            Forum
          </AppLink>
          <AppLink href="/cv" className="mr-3 nav-link">
            Cv
          </AppLink>
        </Nav>
        <Nav>
          <AppLink href="/login" className="mr-3 nav-link">
            Sign In
          </AppLink>
          <AppLink href="/register" className="mr-3 nav-link btn btn-success bg-green-2 bright">
            Sign Up
          </AppLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}


export default AppNavbar;
