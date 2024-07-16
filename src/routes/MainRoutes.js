import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - page
const Dashboard = Loadable(lazy(() => import('../pages/Mainpages/Dashboard')));
const Privacy = Loadable(lazy(() => import('../pages/LoginPages/Privacy.jsx')))
const Cookies = Loadable(lazy(() => import('../pages/LoginPages/Cookies.jsx')))
const Legal = Loadable(lazy(() => import('../pages/LoginPages/Legal.jsx')))
const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                    <MainLayout/>
            ),
            children: [       
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: '/privacy',
                    element: <Privacy />
                },
                {
                    path: '/legal',
                    element: <Legal />
                },
                {
                    path: '/cookies',
                    element: <Cookies />
                }
            
               
              
            ]
        }
    ],
    
}

export default MainRoutes;