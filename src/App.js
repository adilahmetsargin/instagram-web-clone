import Loader from "components/Loader"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import routes from "routes"

export default function App() {

  const user = useSelector(state=>state.auth.user)
  const showRoutes = useRoutes(routes)
  // const [redirect, setRedirect] = useState(false)

  // useEffect(() => {
  // let timeout = setTimeout(() => {
  //    setRedirect(true)
  //  }, 2000);
  //  return () => {
  //    clearTimeout(timeout)
  //  }
  // }, [])
  

  if (user===null) {
    return <Loader />
  }

  return (
    <>
    <Toaster position="top-right" />
    {showRoutes}
  </>
  )
}