import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://www.sciencedaily.com/images/2019/04/190404074915_1_540x360.jpg" />
                <Post alt="nature" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
        )
    }
}