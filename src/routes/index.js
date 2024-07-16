import {useRoutes} from 'react-router-dom'

import MainRoutes from './MainRoutes'
import LoginRoutes from './LoginRoutes'
import ProfileRoutes from './ProfileRoutes'
// import FreeRoutes from './FreeRoutes';

export default function PageRoutes() {

    return useRoutes([MainRoutes, LoginRoutes, ProfileRoutes]);
}