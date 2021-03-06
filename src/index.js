import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    user_pic = {faker.image.avatar()} 
                    author="Tom" 
                    timeAgo = "Today at 9:00am" 
                    comment1="Glad to meet you guys!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    user_pic = {faker.image.avatar()} 
                    author="Jerry" 
                    timeAgo = "Tomorrow at 6:00am" 
                    comment1="Hello there"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    user_pic = {faker.image.avatar()} 
                    author="Jane" 
                    timeAgo = "Yesterday at 8:30pm" 
                    comment1="Hola! Yo soy Jane!"/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)