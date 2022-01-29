import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="https://www.google.com" className="navbar-brand" style={{marginLeft:"20px"}}>    Employee Management App</a>
                </div>

                </nav>

            </header>
                
            </div>
        )
    }
}

