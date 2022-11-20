import { ReactElement } from "react"
import HomePage from "pages/home/HomePage"

interface Route {
  path: string
  component: ReactElement
}

const home: Route = {
  path: "/",
  component: <HomePage />,
}

export default {
  home,
}
