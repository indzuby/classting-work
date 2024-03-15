import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Main from '../pages/main';
import Quiz from '../pages/quiz';
import { RecoilRoot } from 'recoil';
import Result from '../pages/result';

const setup = (path: string) => {

	render(
		<RecoilRoot>
			<MemoryRouter initialEntries={[path]}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</MemoryRouter>
		</RecoilRoot>
	);
}
const originalAlert = window.alert;
const mockAlert = jest.fn();
jest.mock('react-chartjs-2', () => ({
	Bar: () => null
}));
beforeEach(() => {
	window.alert = mockAlert;
})

afterEach(() => {
	// alert 함수를 원래대로 되돌립니다.
	window.alert = originalAlert;
});

describe('Main', () => {

	it('renders quiz button', () => {
		setup('/')
		const linkElement = screen.getByRole('button', { name: /퀴즈 풀기/i });
		expect(linkElement).toBeInTheDocument();
	});
	it('allows clicking the quiz button', async () => {
		setup('/')
		fireEvent.click(screen.getByRole('button', { name: /퀴즈 풀기/i }))
		await waitFor(() => {
			expect(screen.getByText(/퀴즈 진행 시간/i)).toBeInTheDocument();
		})
	})
})

describe('Quiz', () => {

	it('click the submit button (without selecting an option)', async () => {
		setup('/quiz')
		fireEvent.click(screen.getByRole('button', { name: /제출/i }))
		expect(mockAlert).toHaveBeenCalledWith('정답을 선택해주세요.');
	})
	it('click the submit button (select an option)', async () => {
		setup('/quiz')
		for (let i = 0; i < 10; i++) {
			fireEvent.click(screen.getAllByRole('radio')[0])
			fireEvent.click(screen.getByRole('button', { name: /제출/i }))
			expect(mockAlert).toHaveBeenCalled();
			const alertText = mockAlert.mock.calls[0][0]
			expect(alertText).toMatch(/^(정답입니다\.|오답입니다\.)$/)
		}
	})
})

describe('Quiz Result', () => {
	it('render result page', async () => {
		setup('/result')

		await waitFor(() => {
			expect(screen.getByText(/퀴즈가 종료되었습니다!/i)).toBeInTheDocument();
		})
	})
	it('render review note', async () => {
		setup('/result')
		expect(screen.getByText(/오답 노트/i)).toBeInTheDocument();
		expect(screen.getAllByRole('radio', { checked: true })).toHaveLength(10);
	})
})