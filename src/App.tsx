import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from 'src/routes/index'
import { ThemeProvider } from 'styled-components'
import theme from 'src/assets/styles/theme'
import ResetStyle from 'src/assets/styles/reset'
import {
  HashRouter as Router
} from 'react-router-dom'
function App () {
  return (
    <Router>
      <ResetStyle/>
      <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
    </Router>
  )
}
export default App
