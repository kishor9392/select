import './index.css'

const initial = () => (
  <p className="h2">Click on an event, to view its registration details</p>
)

const Register = () => (
  <div className="b">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="registered"
      className="registered"
    />
    <h1 className="par">You have already registered for the event</h1>
  </div>
)

const yetRegister = () => (
  <div className="b">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
      className="yet"
    />
    <p className="par">
      A live performance brings so much to your relationship with dance
    </p>

    <button type="button" className="btn3">
      Register Here
    </button>
  </div>
)

const close = () => (
  <div className="b">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
      alt="registrations closed"
      className="yet"
    />
    <h1 className="par">Registrations Are Closed Now!</h1>
    <p className="par">Stay tuned. We will reopen</p>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  switch (status) {
    case 'INITIAL':
      return initial()
    case 'REGISTERED':
      return Register()
    case 'YET_TO_REGISTER':
      return yetRegister()
    case 'REGISTRATIONS_CLOSED':
      return close()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
