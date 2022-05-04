import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;
interface Route {
    path: string;
    name: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyOne = lazy(() => import(/* webpackChunkName:'pageOne' */'./01-normal-routes/pages/pageOne'));
const LazyTwo = lazy(() => import(/* webpackChunkName:'pageTwo' */'./01-normal-routes/pages/pageTwo'));
const LazyThree = lazy(() => import(/* webpackChunkName:'pageThree' */'./01-normal-routes/pages/pageThree'));

export const routes: Route[] = [
    {
        name: 'Lazy One',
        path: 'lazy1',
        to: '/lazy1',
        Component: LazyOne
    },
    {
        name: 'Lazy Two',
        path: 'lazy2',
        to: '/lazy2',
        Component: LazyTwo
    },
    {
        name: 'Lazy Three',
        path: 'lazy3',
        to: '/lazy3',
        Component: LazyThree
    }
]