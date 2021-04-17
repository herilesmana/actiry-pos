import ReactDOM from 'react-dom'
import React, {useRef, useState} from 'react'
import web from './utils/web'

const Login = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        setError('')
        web.post('login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }).then((response) => {
            setLoading(false)
            if(response.status === 204) {
                window.location.reload()
            }
        }).catch((error) => {
            setLoading(false)
            if(error.response.status === 422) {
                setError('Please check your input')
            }else{
                setError('Silahkan coba reload browser')
            }
        })
    }

    return (
        <>
            <div className="hide-print fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24">
                <div className="fixed glass w-full h-screen left-0 top-0 z-0 opacity-100"></div>
                <div className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10 opacity-100 scale-100">
                    <div className="text-left w-full text-sm p-6 overflow-auto">
                        <div className="text-center mb-5">
                            <img src="img/logo.png" className="w-10 m-auto" />
                            <h2 className="text-xl font-semibold">ACTIRY POS</h2>
                            <p>CABANG SUNAGARA</p>
                        </div>
                        { error !== '' &&
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
                                <strong class="font-bold">Login failed! </strong>
                                <span class="block sm:inline">{ error }</span>
                                <span onClick={() => setError('')} class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>
                        }
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-semibold text-sm text-grey-darkest" htmlFor="username">Username</label>
                            <input ref={usernameRef} className="border py-2 px-3 text-grey-darkest rounded" type="text" name="username" id="username" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-semibold text-sm text-grey-darkest" htmlFor="password">Password</label>
                            <input ref={passwordRef} className="border py-2 px-3 text-grey-darkest rounded" type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="p-4 w-full">
                        <button disabled={loading} onClick={handleSubmit} className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none hover:bg-cyan-700">
                            { loading ? 'Pocessing..' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(
    <Login />,
    document.getElementById('root')
)