//CoinHT.js
import React,{ Component } from 'react'

class CoinHT extends Component{
render(){
	return(
	<div class='CoinHT'>
		<img alt="Output"
		style={{ width:'200px', height:'200px' }}
		src={this.props.info.imgSrc}
		/>
	</div>
	)
}
}
export default CoinHT

