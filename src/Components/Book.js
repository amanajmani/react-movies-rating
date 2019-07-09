import React from 'react'
import ReactDOM from 'react-dom'

export default class Book extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  addRating = () => {
    this.setState({count: this.state.count + 1})
  }
  lowerRating = () => {
    this.setState({count: this.state.count - 1})
  }
  resetRating = () => {
    this.setState({count: 0})
  }

  render(){
  const {img,title,director} = this.props.info;
    return (
    <article className = "book">
      <img src= {img} width= "200" alt = "ok"/>
        <div>
          <h3> Title: {title} </h3>
          <h5> Director: {director} </h5>
          <h5>
          Rate It: <button type="button" onClick={this.lowerRating}>&nbsp;&nbsp; - &nbsp;&nbsp;</button>
          <button type="button" onClick={this.addRating}>&nbsp; + &nbsp;</button>
          </h5>
          <h5> Your Rating: {this.state.count} </h5>
          <h5> Reset: <button type="button" onClick={this.resetRating}> Reset </button> </h5>
      </div>
    </article>
    );
  }
}