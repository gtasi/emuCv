import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const generateSrcUrl = () => {
	// Generate a unique timestamp to bust the cache
	const timestamp = Date.now();
	const srcUrl = `https://github1s.com/renezzero/emuCv/blob/main/src/components/VSCode.jsx?timestamp=${timestamp}`;
	return srcUrl;
};

const VSCodeContent = () => {
	const srcUrl = generateSrcUrl();
	return (
		<BodyContent>
			<Iframe src={srcUrl} frameBorder="0" title="VsCode"></Iframe>
		</BodyContent>
	);
};

export default VSCodeContent;
