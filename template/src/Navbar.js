import React from 'react';
import ReactDOM from 'react-dom/client';

class NavBar extends React.Component {
    render(){
        return (<nav class="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href='/home'>
                {/*image*/}
                <img src="./public/logo192.png" alt="" width="40" height="30" class="d-inline-block align-middle"/>
                Title
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="d-flex align-items-end">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {/*Page 1*/}
                        <li class="nav-item">
                            <a class="nav-link {% if about %}active{% endif %}" aria-current="page" href="/link">Page 1</a>
                        </li>
                        {/*Page 2*/}
                        <li class="nav-item">
                            <a class="nav-link {% if portfolio %}active{% endif %}" href="/link">Page 2</a>
                        </li>
                        {/*Page 3*/}
                        <li class="nav-item">
                            <a class="nav-link {% if impossible %}active{% endif %}" href="/link">Page 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </nav>);
    }
}
export default NavBar