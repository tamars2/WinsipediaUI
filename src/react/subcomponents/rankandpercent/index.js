import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-top: 2vw;
	padding-bottom: 2vw;
`

const Rank = styled.div`
	font-family: 'Ultra', serif;
	font-weight: bold;
	height: 10vw;
	font-size: 5vw;
	vertical-align: middle;
	align-self: center;
	text-align: center;
	line-height: 8vw;
	padding-top: 1vw;
	padding-bottom: 1vw;
	grid-column: ${(props) => {
		if (props.side === "left") {
			return 1
		}
		else {
			return 2
		}
	}};
	grid-row: 1;
	background-color: ${(props) => {
		if (props.leading) {
			return props.color
		}
		else {
			 
		}
	}};
	color: ${(props) => {
		if (props.leading) {
			return "#ffffff"
		}
		else {
			return props.color
		}
	}};
`

const Data = styled.div`
	font-family: 'Gudea', sans-serif;
	font-size: 5.5vw;
	font-weight: 900;
	align-self: center;
	vertical-align: middle;
	text-align: center;
	line-height: 10vw;
	padding-top: 1vw;
	padding-bottom: 1vw;
	height: 10vw;
	background-color: ${(props) => {
		if (props.leading) {
			return props.color
		}
		else {
			 
		}
	}};
	grid-column: ${(props) => {
		if (props.side === "left") {
			return 2
		}
		else {
			return 1
		}
	}};
	grid-row: 1;
	color: ${(props) => {
		if (props.leading) {
			return "#ffffff"
		}
		else {
			return "#595e60"
		}
	}};
`

const Suffix = styled.sup`
	font-family: 'Ultra', serif;
	font-size: 3vw;
	font-weight: bold;
	align-self: center;
	text-align: center;
`

export class RankAndPercent extends Component {
	constructor(props) {
		super(props)
		this.suffix = this.suffix.bind(this)
	}
	
	suffix(i) {
		var j = i % 10,k = i % 100;
    if (j === 1 && k !== 11) {
			return (
				<Suffix>st</Suffix>
			)
    }
    if (j === 2 && k !== 12) {
			return (
				<Suffix>nd</Suffix>
			)
    }
    if (j === 3 && k !== 13) {
			return (
				<Suffix>rd</Suffix>
			)
    }
    return (
			<Suffix>th</Suffix>
		)
}

  render() {
    return (
        <Wrapper>
					<Rank leading = {this.props.leading} color = {this.props.color} side = {this.props.side}>{this.props.rank}{this.suffix(this.props.rank)}</Rank>
					<Data leading = {this.props.leading} color = {this.props.color} side = {this.props.side}>{this.props.data}</Data>
				</Wrapper>
    )
  }
}