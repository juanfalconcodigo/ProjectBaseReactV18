import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "./01-normal-routes/pages";

type JSXComponent = () => JSX.Element;
interface Route {
    path: string;
    name: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(() => import(/* webpackChunkName:'lazyLayout' */'./01-normal-routes/layout/LazyLayout'));

export const routes: Route[] = [
    {
        name: 'Lazy Layout',
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout
    },
   
    {
        name: 'No Lazy',
        path: 'nolazy',
        to: '/nolazy',
        Component: NoLazy
    }
]