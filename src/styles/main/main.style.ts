import styled from "@emotion/styled";

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const StartButton = styled.button`
	width: 200px;
	height: 56px;
	border-radius: 20px;
	font-size: 1.6rem;
	cursor: pointer;
	color: white;
	background-color: rgb(108 149 255);
	border: none;
    &:hover {
        cursor: pointer;
        background-color: rgba(108, 149, 255, 0.8);
    }
	
`
