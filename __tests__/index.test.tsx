import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import Home from '../src/app/page';

describe('Home', () => {
  it('shows and hides tasks when clicking group name', async () => {
    const { getByText, getByLabelText } = render(<Home />);

    const summaryElement = getByText('General Info');

    await user.click(summaryElement);
    const checkboxElement = getByLabelText('Add name and surname');
    expect(checkboxElement).toBeVisible();

    await user.click(summaryElement);
    expect(checkboxElement).not.toBeVisible();
  });

  it('checkbox toggles when clicking task name', async () => {
    const { getByText, getByLabelText } = render(<Home />);

    const summaryElement = getByText('General Info');
    await user.click(summaryElement);

    const checkboxElement = getByLabelText('Add name and surname');
    expect(checkboxElement).toHaveAttribute('type', 'checkbox');
    expect(checkboxElement).toBeChecked();

    await user.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });
});
