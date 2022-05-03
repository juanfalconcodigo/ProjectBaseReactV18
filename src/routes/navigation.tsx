import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import logo from '../logo.svg';
import { PageOneComponent, PageThreeComponent, PageTwoComponent } from "./01-normal-routes/pages";
export const Navigation = () => {

    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Img Svg" />
                    <ul>
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="home" element={<PageOneComponent/>} />
                    <Route path="users" element={<PageTwoComponent/>} />
                    <Route path="about" element={<PageThreeComponent/>} />
                    <Route path="/*" element={<Navigate to="home" />} />
                </Routes>
            </div>


        </BrowserRouter>
    )
}