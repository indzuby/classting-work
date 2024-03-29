import styled from "@emotion/styled";

export const Wrapper = styled.div`
	max-width: 800px;
	width: calc(100% - 40px);
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 20px;
	padding-bottom: 50px;
`
export const StartButton = styled.button`
	width: 160px;
	height: 48px;
	border-radius: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	color: white;
	border: none;
	background-color: #fec741;
    &:hover {
        background-color: #ffbb00;
    }	
`