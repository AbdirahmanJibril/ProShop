import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import CartHeader from './CartHeader'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { logout } from '../reducers/userReducers/userLoginSlice'
=======
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { logout } from '../reducers/userReducers'
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
<<<<<<< HEAD

=======
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
  const { userInfo } = userLogin

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
<<<<<<< HEAD
              <Nav.Item>
                {' '}
                <Nav.Link href='/cart/:id'>
                  <CartHeader />
                </Nav.Link>
              </Nav.Item>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <Nav.Link href='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Nav.Link>

                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Item>
                  <Nav.Link href='/login'>
                    <i class='fa-solid fa-arrow-right-to-bracket fa-2x'></i>{' '}
                    Sing in
                  </Nav.Link>
                </Nav.Item>
=======
              <LinkContainer to='/cart/:id'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Sing in
                  </Nav.Link>
                </LinkContainer>
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
