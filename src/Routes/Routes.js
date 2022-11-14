import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Pages/layout/Main';

const router = () => createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;