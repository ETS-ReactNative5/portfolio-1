import React, {Component} from 'react';

export class NetworkIcon extends Component {
    render() {
        return <li key={this.props.name}>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer"><i className={this.props.className}></i></a>
        </li>
    }
}