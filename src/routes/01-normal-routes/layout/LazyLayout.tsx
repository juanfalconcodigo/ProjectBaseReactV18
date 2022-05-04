import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageOneComponent, PageTwoComponent } from '../pages/';


export default function LazyLayout() {
    return (
        <>
            <div>
                <div>LazyLayout</div>
                <ul>
                    <li>
                        <NavLink to="one" className={({isActive})=>isActive?'nav-active':''}>Children One</NavLink>
                    </li>
                    <li>
                        <NavLink to="two" className={({isActive})=>isActive?'nav-active':''}>Children Two</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path='one' element={<PageOneComponent />} />
                    <Route path='two' element={<PageTwoComponent />} />
                    <Route path='*' element={<Navigate replace to="one" />} />
                </Routes>

            </div>

        </>
    )
}
