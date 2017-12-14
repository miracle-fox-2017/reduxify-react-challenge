import React from 'react'
import TheSideBar from './TheSideBar'
import TheRightSideBar from './TheRightSideBar'

const HomeLayout = (props) => {
  return(
    <div className="columns">
      <TheSideBar />
      {props.children}
      <TheRightSideBar />
    </div>
  )
}

export default HomeLayout
