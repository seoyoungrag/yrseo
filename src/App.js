import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Experience from './components/experience'

function App() {
  return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Experience></Experience>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
  );
}

export default App;
