import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail author="Tom"/>
            <CommentDetail author="Jerry"/>
            <CommentDetail author="Jane"/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)