import { lazy } from 'react';

const HomePage = lazy(() => import ('../components/Content/Home/Home'));
const SecondPage = lazy(() => import ('../components/Content/Second/Second'));
const ThirdPage = lazy(() => import ('../components/Content/Third/Third'));
const FourthPage = lazy(() => import ('../components/Content/Fourth/Fourth'));
const FifthPage = lazy(() => import ('../components/Content/Fifth/Fifth'));
const NotFoundPage = lazy(() => import ('../components/UI/PageNotFound/PageNotFound'));

const cmp = [
    {name: <HomePage />, path:'/'},
    {name: <SecondPage />, path:'/menu-item-2/'},
    {name: <ThirdPage />, path:'/menu-item-3/'},
    {name: <FourthPage />, path:'/menu-item-4/'},
    {name: <FifthPage />, path:'/menu-item-5/'},
    {name: <NotFoundPage />, path: null}
];

export default cmp;