# react-userouter

~~~
This is not the useRouter that you are looking for.
~~~

This is a simple implementation of a router I build to study making custom hooks.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

### General Usage

```javascript
import { useRouter } from './useRouter'

import Home from './pages/Home'
import Blog from './pages/blog'
import About from './pages/About'
import Contact from './pages/Contact'

const routes = {
    "/": props => <Home {...props} />,
    "/post": props => <Blog {...props} />,
    "/about": props => <About {...props} />,
    "/contact": props => <Contact {...props} />,
}

export default function App() {

    const Page = useRouter(routes)

    return Page
}
```

### With Loading and NotFound pages

```javascript
import { useRouter } from './useRouter'
import routes from './routes'

const LoadingPage = (props) => <span>Loading...</span>

const NotFoundPage = (props) => <span>Page Not Found</span>

export default function App() {

    const Page = useRouter(routes, "", LoadingPage, NotFoundPage)

    return Page

}
```

### With baseURL

```javascript
import { useRouter } from './useRouter'
import routes from './routes'

const baseURL = "/test"

export default function App() {

    const Page = useRouter(routes, baseURL)

    return Page

}
```

When you access URL below the baseURL, it will show the `page not found` component.

### Router variables

To get the router variables like params, hash and query, check the `props.context` in the page component.

```javascript
export default function Page(props) {

    const {context, ...others} = props

    console.log(context)

    console.log(others)

    ...
}

```

If you access a URL like this `http://192.168.1.5/post/12345?id=abcde` and you serving a page for `/post`, then you will get the following context variable:

```
{ params: '12345', hash: '', query: 'id=abcde' }
```

This is a very lightweight router module and it does not break the browser's back button function.

