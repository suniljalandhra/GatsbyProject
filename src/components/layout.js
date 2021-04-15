/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {FaInstagram,FaLinkedin,FaEnvelope,FaGithub,FaTwitter} from "react-icons/fa"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <main
        style={{
          flexGrow: 1,
        }}
        >
          {children}</main>
        <footer className = "footer">
          <div className = "footer_social">
          <a href = "https://twitter.com/suniljalandhra9" target="_blank"><FaTwitter/></a>
          <a href = "https://www.instagram.com/su.nil8059/" target="_blank"><FaInstagram/></a>
          <a href = "https://www.linkedin.com/in/sunil-jalandhra-587834147/" target="_blank"><FaLinkedin/></a>
          <a href = "https://github.com/suniljalandhra" target="_blank"><FaGithub/></a>
          <a href = "mailto:jalandhrasunil99@gmail.com" target="_blank"><FaEnvelope/></a>

          </div>
          <div className = "atribute">
          © {new Date().getFullYear()}, Sunil Jalandhra
          {` `}
          </div>
         
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
