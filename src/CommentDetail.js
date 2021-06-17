import React from 'react'
import faker from 'faker'

const CommentDetail = props => {
    console.log(props)
    return (
        <div className = "comment">
            <a href = "/" className = "avatar">
                <img alt="avatar" src={faker.image.avatar()}></img>    
            </a>
            <div className="content">
                <a href = "/" className = "author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00pm</span>
                </div>
                <div className="text">Glad to meet you guys!</div>    
            </div>    
        </div>
    )
}

export default CommentDetail