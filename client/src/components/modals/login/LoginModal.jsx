import { useContext, useState, useRef } from 'react'
import { AuthContext } from '../../../context'
import Backdrop from '../../backdrop/Backdrop'
import './loginModal.scss'

const LoginModal = () => {
  const { closeLogin, error } = useContext(AuthContext)
  const [isSignup, setIsSignup] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    passward: "",
    name: "",
    lastName: "",
  });
  const errRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Backdrop onClick={closeLogin}>
      <div className="loginModal" onClick={e => e.stopPropagation()}>
        <form className="form">
          {isSignup && (
            <>
              <label htmlFor="firstName">FirstName :</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
              <p className="error" ref={errRef}>
                {error?.name ? error.name : ""}
              </p>
              <label htmlFor="lastName">LastName :</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={newUser.lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />
              <p className="error" ref={errRef}>
                {error?.lastName ? error.lastName : ""}
              </p>
            </>
          )}
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <p className="error" ref={errRef}>
            {error?.email ? error.email : ""}
          </p>
          <label htmlFor="passward">Password (6 or more characters) :</label>
          <input
            type="password"
            name="passward"
            id="passward"
            value={newUser.passward}
            onChange={(e) =>
              setNewUser({ ...newUser, passward: e.target.value })
            }
          />
          <p className="error" ref={errRef}>
            {error?.passward ? error.passward : ""}
          </p>
          <button onClick={handleSubmit}>
            {isSignup ? "Agree & Join" : "Sign In"}
          </button>
          {isSignup ? (
            <p className="loginRegister" style={{ fontSize: "14px" }}>
              Already have account
              <span
                onClick={() =>
                  setIsSignup((prev) => {
                    return !prev;
                  })
                }
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="loginRegister" style={{ fontSize: "14px" }}>
              Don't have acccount
              <span onClick={() => setIsSignup((prev) => !prev)}>Join Now</span>
            </p>
          )}
        </form>
      </div>
    </Backdrop>
  )
}

export default LoginModal