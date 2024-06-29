import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import CodeEditor from './components/CodeEditor';
import { themes } from 'prism-react-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TealFeed Code Editor/i);
  expect(linkElement).toBeInTheDocument();
});


describe('CodeEditor Component', () => {
  it('updates sourceCode state when typing', () => {
    const { getByRole } = render(<CodeEditor />);
    const textarea = getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'function test() { return true; }' } });
    expect(textarea).toHaveValue('function test() { return true; }');
  });

  it('prevents text selection', () => {
    const { getByRole } = render(<CodeEditor />);
    const textarea = getByRole('textbox');
    fireEvent.select(textarea);
  
    // Ensure that the default selection behavior is prevented
    expect(window.getSelection().toString()).toBe('');
  });

  it('applies syntax highlighting', () => {
    const { getByRole, getByText } = render(<CodeEditor />);
    const textarea = getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'function test() { return true; }' } });
   
    // Example: Check if a specific token exists after highlighting
    const highlightedElement = getByText('function');
    expect(highlightedElement).toBeInTheDocument();
  });
  
});




