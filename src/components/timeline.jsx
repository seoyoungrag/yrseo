import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>디웹스 SI사업부 과장 <span>2016-현재 재직중</span></h2>
                        <p>2016년 SI사업부 대리로 입사하였고, 공공 프로젝트 및 사내 서비스 개발을 진행했습니다. 최근 공공 프로젝트가 클라우드 성격을 가지면서 k8s 환경에서의 개발 경험 및 빌드 과정을 이해할 수 있었습니다. 당시 CI는 jira+bitbucket+bamboo였습니다. 또한 사기업 플랫폼 C2C 개발 SI프로젝트를 통해 elastic search+redis와 같은 캐시처리에 대한 이해도가 있습니다.  사내 서비스는 주로 react-native를 기반으로 android, object-c를 부분 개발하는 앱개발이 주가 되었습니다. 회사내부 및 SI 프로젝트에서 주 역할은 PL, 개발실무, CI구축(주로 git+gogs+jenkins) 및 관리 등의 업무를 진행했습니다. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>타이드스퀘어 주임 <span>2015-2015</span></h2>
                        <p>타이드스퀘어에 주임으로 입사하였습니다. 현대카드의 여행 플랫폼인 PRIVIA의 백오피스 공통기능 개발 담당으로 모바일앱 푸시서버, 이미지 리사이징 업로드 등의 기능을 신규개발 하였고 부분적으로 PRIVIA 사용자 사이트 유지보수를 진행했습니다.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>국군 제3707부대 <span>2009-2014</span></h2>
                        <p>공군 전산부사관으로 임관하여 3707부대 본부 전산과에서 5년간 복무했습니다. 복무동안에는 본부 및 20여개의 예하부대를 위한 웹사이트 개발 및 유지보수와 서버 운용, 네트워크 관리, 사업 관리 등 다양한 분야의 업무를 경험했습니다. 주담당은 계속 바뀌었지만 부대내 사이트 개발 및 유지보수 업무는 부가적으로 진행해왔으며, 정보보호 석사를 진행을 하면서 원격지의 PC와 같은 단말기를 관리하는 시스템을 개발하여 부대에 적용 및 논문화했습니다.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}