import React from 'react';
import './nav.css';

export default function Nav() {
    return (
        <div>
            <nav class="navbar is-info" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href='#'> Lyrics Sniffer
                    {/* <img src='' width="40" height="90"/> */}
                    </a>

                    {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a> */}
                </div>

                {/* <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-center">
                        <a class="navbar-item">Lyrics Sniffer</a>
                    </div>
                </div> */}
            </nav>
        </div>
    )
}
