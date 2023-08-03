import React, { useState } from 'react'
import Header from './components/Header'
import Router from './router/Router'

import Button from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from './components/Modal'

function App() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  )
}

export default App
