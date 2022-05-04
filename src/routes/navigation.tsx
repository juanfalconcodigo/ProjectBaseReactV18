import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {

    return (
        <Suspense fallback={<h2>Loading....</h2>}>
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Img Svg" />
                    <ul>
                        {routes.map(({ to, name }, i) => {
                            return (
                                <li key={i}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <Routes>
                    {routes.map(({ path, Component }, i) => {
                        return (
                            <Route key={i} path={path} element={<Component />} />
                        )
                    })}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
                </Routes>
            </div>
        </BrowserRouter>
        </Suspense>
    )
}