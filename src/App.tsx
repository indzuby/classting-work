import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from "@emotion/styled";
import Main from "./pages/main";
import Quiz from "./pages/quiz";
import Result from './pages/result'

const AppBody = styled.div`
	background-color: white;
	max-width: 1080px;
	height: 100%;
	margin: 0 auto;
	border-right: 1px solid rgb(233 235 238);
	border-left: 1px solid rgb(233 235 238);
	overflow-y: auto;
`;

const App = () => {
	return (
		<AppBody>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Main />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</AppBody>
	);
}

export default App;
