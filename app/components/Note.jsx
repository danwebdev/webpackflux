// import React from 'react';
var React = require("react");

export default class Note extends React.Component{
  render(){
    return <div>{this.props.value}</div>
  }
}
