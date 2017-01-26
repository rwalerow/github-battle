import React from 'react'
import { transparentBG } from '../styles'

function MainContainer (props){
	return (
		<div className="jumbotrone col-sm-12 text-center" style={transparentBG}>
			{props.children}
		</div>
	)
}

export default MainContainer
