import React from 'react';
import Post from './Posts';
import Users from './Users';

export default function Feed() {
    return (
        <div className="container feed">
            <Post/>
            <Users />
        </div>
    )
}