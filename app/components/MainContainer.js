import React from 'react'
import { transparentBG } from '../styles'

function MainContainer ({children}){
	return (
		<div className="jumbotrone col-sm-12 text-center" style={transparentBG}>
			{children}
		</div>
	)
}

export default MainContainer
