import { useRouter } from './useRouter'
import routes from './routes'
import NotFound from './pages/notfound'

function App() {

  const Page = useRouter(routes, "", null, NotFound)

  return <Page fruit={"apple"} quantity={12} />

}

export default App;
