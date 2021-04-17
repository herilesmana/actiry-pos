import ReactDOM from 'react-dom'

const Login = () => {
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
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 uppercase font-semibold text-sm text-grey-darkest" for="username">Username</label>
                            <input class="border py-2 px-3 text-grey-darkest rounded" type="text" name="username" id="username" />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 uppercase font-semibold text-sm text-grey-darkest" for="password">Password</label>
                            <input class="border py-2 px-3 text-grey-darkest rounded" type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="p-4 w-full">
                        <button className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none hover:bg-cyan-700">Login</button>
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