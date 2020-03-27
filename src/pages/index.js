import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Kids Party"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">¡Hacemos la fiesta que necesitas!</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ex eum quisquam culpa voluptatum ipsa nisi, veritatis voluptatibus id obcaecati non, mollitia 
                atque nam dolore? Minima nulla aspernatur asperiores cum odit.</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>¡Comencemos!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Que Ofrecemos</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-puzzle-piece text-primary mb-4"></i>
                  <h3 className="h5 mb-2">Juegos personalizados</h3>
                  <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, error!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-stopwatch text-primary mb-4"></i>
                  <h3 className="h5 mb-2">Carreras de obstáculos</h3>
                  <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, eum.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-pencil-alt text-primary mb-4"></i>
                  <h3 className="h5 mb-2">Todos dibujando</h3>
                  <p className="text-muted mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aliquid.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-paper-plane text-primary mb-4"></i>
                  <h3 className="h5 mb-2">Jugamos con papeles</h3>
                  <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, temporibus!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Galería
                    </div>
                    <div className="project-name">
                      Descripción
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">¡Contactános!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Estamos listos para recibir tu consulta. <br/>
                Dános un llamado o mensaje por correo electrónico y nos contactaremos a la brevedad.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone text-primary fa-3x mb-3"></i>
                <div>(123) 456-7890</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope text-primary fa-3x mb-3"></i>
                <a className="d-block" href="/">info@tusitioweb.com</a>
              </div>
            </div>
            <div className="row social justify-content-center">
              <div className="social-container">
                <h5 className="text-center">Seguínos</h5>
                <div className="social-buttons">
                  <li><i className="fab text-primary fa-3x fa-facebook"></i></li>
                  <li><i className="fab text-primary fa-3x fa-instagram"></i></li>
                  <li><i className="fab text-primary fa-3x fa-youtube"></i></li>
                  <li><i className="fab text-primary fa-3x fa-twitter"></i></li>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
