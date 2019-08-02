import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">서영락</a></h1>
              <span className="email"><i className="icon-mail"></i> truezure@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experince</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  정성<i className="icon-heart" aria-hidden="true" />과 마음<i className="icon-beer" aria-hidden="true"></i>을 다해 만들었습니다.<br></br>
              </small></p>
              <p><small>
                프로젝트 세부 메뉴가 추가될 예정입니다.
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}