import styled from "@emotion/styled";

export const Wrapper = styled.div`
	height: 100%;
	width: 800px;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	margin: 0 auto;
`

export const NextButton = styled.button`
	width: 160px;
	height: 48px;
	border-radius: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	color: white;
	background-color: rgb(108 149 255);
	border: none;
    &:hover {
        cursor: pointer;
        background-color: rgba(108, 149, 255, 0.8);
    }	
`
export const StartButton = styled(NextButton)`
	background-color: #fec741;
    &:hover {
        background-color: #ffbb00;
    }	
`

export const ExplainWrapper = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: end;
	width: 100%;
`


export const OptionWrapper = styled.div`
	display:flex;
	flex-direction: column;
	gap: 10px;
	> label {
		display:flex;
		gap: 10px;
		align-items: center;
		cursor: pointer;
		height: 24px;
		&.answer {
			background-color: rgba(255, 99, 132, 0.2);
			border-radius: 5px;
		}
	}
`
