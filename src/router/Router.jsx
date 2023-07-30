import { Routes, Route } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'
import CurrentEmployees from '../pages/CurrentEmployees'

/**
 * Router component responsible for handling the application's routing.
 * @component
 * @returns {JSX.Element} The rendered Router component.
 */
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CreateEmployee />} />
      <Route path="/employees" element={<CurrentEmployees />} />
      <Route path="*" element={<p>Error</p>} />
    </Routes>
  )
}

export default Router
