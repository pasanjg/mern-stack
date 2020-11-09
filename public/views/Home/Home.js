import React from 'react'
import './Home.scss'

import Logo from '../../assets/images/logos/logo.png'
import mongoLogo from '../../assets/images/logos/mongo.png';
import expressLogo from '../../assets/images/logos/express.png';
import reactLogo from '../../assets/images/logos/react.png';
import nodeLogo from '../../assets/images/logos/node.png';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header d-flex justify-content-around">
                <div className="title mt-5">
                    <p>MERN STACK</p>
                </div>

                <div className="row container">
                    <div className="col-md-3 col-sm-12 text-center">
                        <img src={mongoLogo} className="App-logo-default" alt="logo" />
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <img src={expressLogo} className="App-logo-default" alt="logo" />
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <img src={reactLogo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <img src={nodeLogo} className="App-logo-default" alt="logo" />
                    </div>
                </div>

                <p>
                    Edit the NodeJS API in <code>api/</code> folder and React App in <code>public/</code> folder.
                </p>

                <div className="mt-5">
                    <img src={Logo} className="logo" alt="logo" />
                </div>
            </header>
        </div>
    )
}
