import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import Widget from '../../components/widgets/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
  <Sidebar/>
  <div className="homeContainer">
    <Navbar/>   
    <div className="widget">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type ="balance"/>
    

    </div>
    <div className="charts">
      <Featured/>
      <Chart/>
    </div>
    <div className="listContainer">
      <div className="listTitle">
        Latest transaction
      </div>
      <List />
    </div>
  </div>

    </div>
  )
}

export default Home