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
const RegisterPage = lazy(() => import(/* webpackChunkName:'registerPage' */'../03-forms/pages/register.page'));
const FormikPage = lazy(() => import(/* webpackChunkName:'formikPage' */'../03-forms/pages/formik.page'));
const FormikComponentPage = lazy(() => import(/* webpackChunkName:'formikPage' */'../03-forms/pages/formik-components.page'));
const FormikAbstractPage = lazy(() => import(/* webpackChunkName:'formikPage' */'../03-forms/pages/formik-abstract.page'));
const FormikRegisterPage = lazy(() => import(/* webpackChunkName:'formikPage' */'../03-forms/pages/formik-register.page'));
const FormikDynamicPage = lazy(() => import(/* webpackChunkName:'formikPage' */'../03-forms/pages/formik-dynamic.page'));
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
    },
    {
        name: 'Register Page',
        path: 'register',
        to: '/register',
        Component: RegisterPage
    },
    {
        name: 'Formik Page',
        path: 'formik',
        to: '/formik',
        Component: FormikPage
    },
    {
        name: 'Formik Component Page',
        path: 'formik-component',
        to: '/formik-component',
        Component: FormikComponentPage
    },
    {
        name: 'Formik Abstract Page',
        path: 'formik-abstract',
        to: '/formik-abstract',
        Component: FormikAbstractPage
    },
    {
        name: 'Formik Register Page',
        path: 'formik-register',
        to: '/formik-register',
        Component: FormikRegisterPage
    },
    {
        name: 'Formik Dynamic Page',
        path: 'formik-dynamic',
        to: '/formik-dynamic',
        Component: FormikDynamicPage
    }

]