import React from 'react';
import HomePage from  './pages/Homepage/HomePage'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductListActionPage from './pages/ProductAction/ProductListActionPage';
const routes = [
    {
        path :'/',
        exact:true,
        main: ()=><HomePage/>
    },
    {
        path :'/product-list',
        exact:false,
        main: ()=><ProductListPage/>
    },
    {
        path :'/product/add',
        exact:false,
        main: ({history})=><ProductListActionPage history={history}/>
    },
    {
        path :'/product/:id/edit',
        exact:false,
        main: ({match,history})=><ProductListActionPage match={match} history={history}/>
    },
    {
        path :'',
        exact:false,
        main: ()=><NotFoundPage/>
    },
    
];

export default routes