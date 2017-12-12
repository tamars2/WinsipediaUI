import React, { Component } from 'react';

export class DottedLine extends Component {
	componentWillMount(){
		const dottedLine = {
			borderBottom: "dashed 1px #c3c3c3",
			marginTop: "10px",
			marginBottom: "10px",
		}

		this.setState({
			dottedLine: dottedLine
		});
	} 
  render() {
    return (
        <div style={this.state.dottedLine}></div>
    )
  }

}
