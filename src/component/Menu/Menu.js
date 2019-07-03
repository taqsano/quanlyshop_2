import React from 'react';
import {Route,Link} from 'react-router-dom'

const menus = [
    {
        name :'Trang Chủ',
        to : '/',
        exact:true
    },
    {
        name :'Quản lý sản phẩm',
        to : '/product-list',
        exact:false
    },
];

const MenuLink = ({label,to,activeWhenExact})=>{
    return(
        <Route
            path = {to}
            exact = {activeWhenExact}
            children = {({match})=>{
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to} >
                        {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#555555' }}>
                    <a className="navbar-brand" href="/#">Quản lý sản phẩm</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0 ">
                           {this.showMenu(menus)}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    showMenu =(menus)=>{
        var result = null;
        if(menus.length >0){
            result = menus.map((menu,index)=>{
                return(
                    <MenuLink 
                        key = {index}
                        label = {menu.name} 
                        to = {menu.to}
                        activeWhenExact = {menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;