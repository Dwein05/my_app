import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="data:image/jpeg;base64,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"
                    alt="person"
                    name="Natalie"/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    fgvdx frggv d fv d fv d 
                </div>
            </div>
        )
    }
}