import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, Container } from './components'
import { layoutRoutes } from '../../routers'
import Spinner from '../../components/Spinner'

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Container>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            {layoutRoutes.map(route =>
              <Route
                path={route.path}
                key={route.key}
                exact={route.exact}
                render={props => <route.component {...props} />}
              />
            )}
          </Switch>
        </React.Suspense>
      </Container>
    </div>
  )
}

export default Layout