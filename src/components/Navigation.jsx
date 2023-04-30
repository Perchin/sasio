import React from 'react';
import s from './Navigation.module.css'
import './css/bootstrap.min.css';

const Navigation = () => {
    return (
        <nav className={s.mainNav}>
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
     <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3">СамГТУ</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Навигация">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            2023 год
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      
                        <li><a class="dropdown-item active" href="index-2.htm?year=2023">2023 год</a></li>
                    </ul>
    </div>
    <span class="form-control-dark w-100"></span>
    <ul class="navbar-brand px-3">
        <li class="nav-item text-nowrap">
            <span class="nav-link">Аналитика</span>
        </li>
    </ul>

</header>

        </nav>
    );
}

export default Navigation;