import { lazy } from 'react';
import { useState } from 'react';
// project import
import Loadable from '../Components/Loadable';
import ProfileLayout from '../layout/ProfileLayout';
import AuthGuard from '../utils/route-guard/AuthGuard';
// import PrivateRoute from '../Components/PrivateRoute';
// render - page
const GenerateArticle = Loadable(lazy(() => import('../pages/ProfilePages/GenerateArticle')));
const Profile = Loadable(lazy(() => import("../pages/ProfilePages/Profile")))
const RegisterPage = Loadable(lazy(() => import('../pages/LoginPages/RegisterPage.jsx')))
const Precious = Loadable(lazy(() => import('../pages/Mainpages/Precios')))

const Stripe = Loadable(lazy(() => import('../pages/ProfilePages/Stripe')))

const ProfileRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                <AuthGuard>

                    <ProfileLayout />
                </AuthGuard>


            ),
            children: [
                {
                    path: "generatearticle",
                    element: <GenerateArticle />

                },
                {
                    path: 'profile',
                    element: <Profile />
                },
                {
                    path: 'precios',
                    element: <Precious />
                },

                {
                    path: "stripe",
                    element: <Stripe />,
                },
                {
                    path: "registerpage",
                    element: <RegisterPage />,
                },
            ]
        }
    ],

}

export default ProfileRoutes;