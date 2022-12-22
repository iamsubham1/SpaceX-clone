import React from 'react'

export default function Hamburger() {
    return (
        <div>
            <nav>
                <div class="navbar">
                    <div class="container nav-container">
                        <input class="checkbox" type="checkbox" name="" id="" />
                        <div class="hamburger-lines">
                            <span class="line line1"></span>
                            <span class="line line2"></span>
                            <span class="line line3"></span>
                        </div>

                        <div class="menu-items">
                            <li><a href="#">MISSION</a></li>
                            <li><a href="#">LAUNCHES</a></li>
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">UPDATES</a></li>
                            <li><a href="#">SHOP</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
