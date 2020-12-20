import React from "react";
import Header from "../Header/Header";


const AppWrapper = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default AppWrapper
