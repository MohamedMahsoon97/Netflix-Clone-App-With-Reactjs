import './GetStarted.scss';
import { useRef, useState } from "react";

const GetStarted = () => {
      const [email , setEmail] = useState("");
      const [password , setPassword] = useState("");
      const emailRef = useRef();
      const passwordRef = useRef();
      const handleStart = () => {
            setEmail(emailRef.current.value)
      }
      const handleFinish = () => {
            setPassword(passwordRef.current.value)
      }
      return (
            <div className='get_started'>
                  <p>Ready to watch? Enter your email to create or restart your membership.</p>
                  { !email ? (
                        <div className="input">
                              <input type="email" placeholder="email address" ref={emailRef} />
                              <button className="registerButton" onClick={handleStart}>
                              Get Started
                              </button>
                        </div>
                  ) : (
                        <form className="input">
                              <input type="password" placeholder="password" ref={passwordRef} />
                              <button className="registerButton" onClick={handleFinish}>
                              Start
                              </button>
                        </form>
                  )
            }
            </div>
      );
};

export default GetStarted;