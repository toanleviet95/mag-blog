import React from 'react';
import { connect } from 'react-redux';

class Card extends React.Component {
    render() {
        return (
            <div>
                 <img src={this.props.children.image} width="282" height="210" />
                <div className="post-info">
                    <div className="post-basic-info">
                        <h3>
                            <a href="#">{this.props.children.title}</a>
                        </h3>
                        <p>{this.props.children.content}</p>
                    </div>
                    <div className="post-info-rate-share">
                        <div className="post-share">
                            {this.props.children.date}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect()(Card);