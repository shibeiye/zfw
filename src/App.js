
import React from 'react';
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import Fn404 from './pages/Fn404'

import { BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
         
          <Link to="/home"> 首页</Link>
          <Link to="/cityList"> 城市列表</Link>
          <Link to="/map"> 地图</Link>
        </div>
        <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path="/home" component={Home} />
        <Route path="/cityList" component={CityList} />
        <Route path="/map" component={Map}/>
        <Route  component={Fn404}/>
        </Switch>
     
      </div>
      
    </Router>
  );
}

export default App;
