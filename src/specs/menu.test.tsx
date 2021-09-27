import { render, screen } from '@testing-library/react'
import userEvent          from '@testing-library/user-event'
import { fireEvent, waitFor }          from '@testing-library/dom'
import { MobileMenu,  }     from '../components/dashboardComponents/mobileMenu'
import App from '../App'
import { BrowserRouter }  from 'react-router-dom';
import { SearchPage } from '../pages/search'
import { Route, Switch } from 'react-router-dom'
import { SearchInput } from '../components/searchComponents/inputSearch'


test('should open mobile menu correctly', async () => {
  render(
    <BrowserRouter>
      <MobileMenu color='white' />
    </BrowserRouter>
  )

  const bugerMenu = screen.getByTestId('bugerMenu')

  userEvent.click(bugerMenu)

  expect( await waitFor( () => screen.getByText('Dashboard')) ).toBeVisible()


})
