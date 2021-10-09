import React from 'react'


const Header = () => {
    return (
        <div className="Header bg-dark py-2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="#" className="text-info fs-5">Rocket <span className="text-light">Launcher</span></a>
                    </div>
                    <div className="col text-end">
                        <a href="#" className="text-light fs-5">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;