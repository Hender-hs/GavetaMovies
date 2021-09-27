import { Route, Switch }  from 'react-router-dom'
import { Dashboard }      from '../pages/dashboard'
import { InfoContent }    from '../pages/specificContent'
import { SearchPage }     from '../pages/search'

export const Routes = () => {

  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/search/:type' component={SearchPage} />
      <Route exact path='/search/:type/:id' component={InfoContent} />
    </Switch>
  )
}