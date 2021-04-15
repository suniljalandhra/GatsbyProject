import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <div className="header_intro">
        <h4>Hi,My name is</h4>
      <div className="headerContent">
      <p className="Name">Sunil Jalandhra.</p>
      <p className="FollowByName">
        I am a Software Engineer.  
      </p>
      <p className = "lineHeader">
      I am graduating from Indian Institute of Information Technology Una in 2021,I love to work with <span className="techStack">C++,Swift,Python,HTML,CSS,javaScript,Soidity</span>,When I am not coding you can find me travelling.
      </p>
      </div>
     
      </div>
      
    </header>
    <h2  className = "text-center">Porjects</h2>
    <section className="Projects">
      
      <div className = "project-card">
        <div className = "description_project">
        <h2>Password Saver</h2>
        <p>It is python based application to maintain passwords and encryption for security.</p>
        </div>
        <div className = "link_project">
        <a href = "https://github.com/suniljalandhra/Passwordsaver" className = "button" target = "_blank">Repo</a>
        </div>
      </div>
      <div className = "project-card">
        <div className = "description_project">
        <h2>Ballot Box</h2>
        <p>It is Dapp based Ethereum Blockchian Technology,can be used for voting.</p>
        </div>
        <div className = "link_project">
        <a href = "https://github.com/suniljalandhra/VOTE" className = "button" target = "_blank">Repo</a>
        </div>
      </div>
      <div className = "project-card">
        <div className = "description_project">
        <h2>Resturant Website</h2>
        <p>It is a Website for a local Resturant,it is a responsive website.</p>
        </div>
        <div className = "link_project">
        <a href = "https://github.com/suniljalandhra/coursera-Test/tree/gh-pages/resturant" className = "button" target = "_blank">Repo</a>
        </div>
        
      </div>
        
      
    </section>
  </Layout>
)

export default IndexPage
