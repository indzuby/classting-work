import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from "@emotion/styled";
import Main from "./pages/main";
import Quiz from "./pages/quiz";

const AppBody = styled.div({
	backgroundColor: 'white',
	maxWidth: '1080px',
	height: '100%',
	margin: '0 auto',
	borderRight: '1px solid rgb(233 235 238)',
	borderLeft: '1px solid rgb(233 235 238)',
	overflowY: 'auto',
});

const App = () => {
	return (
		<AppBody>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Main />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</BrowserRouter>
		</AppBody>
	);
}

export default App;
