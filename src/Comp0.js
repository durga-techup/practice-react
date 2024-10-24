import React, { useContext } from 'react'
import { ToastContext } from './App';
import { useSelector, useDispatch } from 'react-redux'
import { popNotification, pushNotification } from './redux/reducers';
import { useNavigate } from 'react-router-dom';
function Comp0() {
    const dispatch = useDispatch()
    const showNotification = useSelector(state => state.todos.copmleted)
    const navigate = useNavigate()
    const fetchall = async () => {
        const apiUrl = process.env.REACT_APP_API_PATH_URI;
        try {
            alert(apiUrl)
            const res = fetch(`${apiUrl}/users/get-all-users`)
            const resData = await res.json();
            console.log("resData", resData)
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <div>
            <h1>
                Hello{" "} {showNotification ? "Yes" : ""}
                <br />
                <button onClick={() => {
                    navigate("/1")
                }} >go to 1 </button>
                <button
                    onClick={() => {
                        if (showNotification) {
                            dispatch(popNotification())
                            fetchall()
                        } else {
                            dispatch(pushNotification())

                            fetchall()
                        }

                    }}
                >
                    Click 0
                </button>{" "}
            </h1>
            <section>
                {/* Ifram with full height and width */}
                {/* <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}   src="https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today" title="W3Schools Free Online Web Tutorials">
            </iframe> */}

            </section>


        </div>
    )
}

export default Comp0
