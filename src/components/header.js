import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header className="old">
    {/* <Container id="head" > */}
    <div id="navbar_custom">
      <Navbar className="navpad" expand="md" variant="dark">
        <polygon id="polygone">
          <Navbar.Brand href="/" id="logo">{siteTitle}</Navbar.Brand>
        </polygon>

        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" >
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="https://twitter.com/suniljalandhra9" target="_blank" className="nav-link" activeClassName="active"><FaTwitter /></Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="https://github.com/suniljalandhra" target="_blank" className="nav-link" activeClassName="active"><FaGithub /></Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="https://www.linkedin.com/in/sunil-jalandhra-587834147/" target="_blank" className="nav-link" activeClassName="active"><FaLinkedin /></Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="mailto:jalandhrasunil99@gmail.com" className="nav-link" activeClassName="active"><FaEnvelope /></Link>
            </Nav.Item>
            <Nav.Item>
              <div id="resume">
                <Link to="https://drive.google.com/file/d/1HQ78U5kTPyDaoQJiqNxXLnEoEs9TKSxV/view?usp=sharing" target="_blank" className="cv" >Resume</Link>
              </div>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>


      </Navbar>

    </div>

    {/* </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
