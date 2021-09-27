import { render, screen } from '@testing-library/react'
import userEvent          from '@testing-library/user-event'
import { fireEvent, waitFor }          from '@testing-library/dom'
import { BrowserRouter }  from 'react-router-dom';
import { Dashboard } from '../pages/dashboard'


test('should has movies list correctly', async () => {
  await render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  )

  const moviesList = screen.getByTestId('movies-list')

})
