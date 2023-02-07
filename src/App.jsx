import React from 'react'
import { BrowserRouter, Routes, Route , NavLink } from "react-router-dom"
import Tips from './pages/Tips'
import History from './pages/History'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <>
            <div class='container'>
                <nav>
                    <div className="downloadCover">
                        <span>x</span>
                        <div>download our android application</div>
                        <button>Download</button>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/"
                                className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                                   Tips
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/History"
                                className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                                    History
                            </NavLink>
                        </li>
                     </ul>
                </nav>
                <div class='content'>
                  <div className="left">

                  </div>
                  <div className="middle">
                      <Routes>
                        <Route path='/' element={<Tips />} />
                        <Route path="/History" element={<History />} />
                      </Routes>
                  </div>
                  <div className="right">

                  </div>
                </div>
            </div>
        </>
    </BrowserRouter>
  )
}

export default App


