import React,{ Component } from 'react'
import CoinHT from './CoinHT'

class TossCoin extends Component{
static defaultProps = {
	coins : [
	
	{side:'head', imgSrc: "https://c8.alamy.com/comp/CN8BAB/1p-penny-over-head-coin-CN8BAB.jpg"},
	{side:'tail', imgSrc:"https://c8.alamy.com/comp/CN8BC0/1p-one-penny-side-on-tails-reverse-copper-CN8BC0.jpg"}
	]
}

constructor(props){
	super(props)
	
	this.state = {
	
	crntOP : null,
	totToss:0,
	heads: 0
	}
	
	this.handleClick = this.handleClick.bind(this)
}

randOP(arr){
	const randomIdx = Math.floor(Math.random() * arr.length)
	return arr[randomIdx]
}

tossed(){
	const newFace = this.randOP(this.props.coins)
	this.setState(curState => {
	const heads = curState.heads +
	(newFace.side === 'head' ? 1 : 0)
	return {
		crntOP:newFace,
		totToss:curState.totToss + 1,
		heads:heads
	}
	})
}

handleClick(){
	this.tossed()
}
render(){
	const {crntOP, totToss, heads} = this.state
	return(
	<div>
		<h2>Task 1: Coin Flip</h2>
		
		{crntOP && <CoinHT info={crntOP} />}
		
		<button onClick={this.handleClick}>Toss</button>
		
		
<p>
		Total Flips: {totToss} ; Number of Heads: {heads}
		; Number of Tails: {totToss - heads}
		</p>


	</div>
	)
}
}

export default TossCoin
