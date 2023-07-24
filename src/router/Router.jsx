import { Routes, Route } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'

/**
 * Router component responsible for handling the application's routing.
 * @component
 * @returns {JSX.Element} The rendered Router component.
 */
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CreateEmployee />} />
      <Route path="*" element={<p>Error</p>} />
    </Routes>
  )
}

export default Router
