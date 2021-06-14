import React from 'react'
import ReactDOM from 'react-dom'

const App = ()=>{
    return (
    <div className="ui comments container">
        <div className = "comment">
            <a href = "/" className = "avatar">
                <img alt="avatar" src=""></img>    
            </a>
            <div className="content">
                <a href = "/" className = "content">
                    Sheen
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00pm</span>
                </div>
                <div className="text">Glad to meet you guys!</div>    
            </div>    
        </div>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)