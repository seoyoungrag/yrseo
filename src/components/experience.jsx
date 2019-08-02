import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">개발자로써 경험한 것들입니다.</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>실무에서 웹개발은 2009년부터 PHP MOJAVI로 시작을 했지만, 2015년부터는 SPRING 기반 웹프로젝트를 경험했습니다. 2017년부터는 extjs를 시작으로 SPA를 접했고, 이후로 nodejs+angular, spring+react를 경험했습니다. 또한 2017년부터는 모바일앱 프로젝트도 진행했습니다. android, swift, react-native 경험이 있습니다. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>2011년에 데이터 모델링 자격증인 DAP를 취득했고, 본격적으로 2016년부터 데이터 설계 및 이관을 담당해왔습니다. 알고리즘은 stack과 queue를 응용해 개발이 가능하며, 시스템적으로는 정보보안 석사진행 중 RSA, DSA을 이해하고 관련 논문을 제안할 정도의 이해도가 있습니다. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>2009년부터 svn, jenkins, redmine을 경험했고, 2016년부터는 git, gogs, jenkins로 직접 사내에 CI를 구축 및 관리하였습니다. 그 외 travis, trello를 시도했습니다. 최근에 수행한 프로젝트에서는 bitbucket, bamboo, k8s를 연동한 CI를 경험하여 관련 구조 및 스크립트 등을 이해할 수 있습니다. </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}