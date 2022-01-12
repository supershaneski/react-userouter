import Home from './pages/home'
import Contact from './pages/contact'
import Blog from './pages/blog'

const routes = {
  '/': props => <Home {...props} />,
  '/contact': props => <Contact {...props} />,
  '/post': props => <Blog {...props} />,
}

export default routes