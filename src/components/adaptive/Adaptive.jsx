import './Adaptive.css'; 
import React from 'react';
import classNames from 'classnames';
export default function Adaptive (props) {
    const { tagname = 'div', children, className } = props;
    return React.createElement(tagname, {className:  classNames('adaptive', className)}, children);
}