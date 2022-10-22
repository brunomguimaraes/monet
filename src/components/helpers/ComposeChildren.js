import React from 'react';

// Render the next component in the array as child of the previous
const ComposeChildren = ({ components = [], children }) => {
	return components.reverse().reduce((currentChild, NextComponent) => {
		return <NextComponent>{currentChild}</NextComponent>;
	}, children);
};

export default ComposeChildren;
