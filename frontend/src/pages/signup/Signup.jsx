import GenderCheckBox from "./GenderCheckBox";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-black text-center text-gray-200">
                Login
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            <div>
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-slate-300 label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-slate-300 label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-slate-300 label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-slate-300 label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                </div>

                <GenderCheckBox />
                
                <a href="#" className="text-sm text-slate-300 hover:underlined hover:text-blue-600 mt-2 inline-block">
                    {"Already"} have an account?
                </a>
                <div>
                    <button className="btn btn-block btn-sm mt-2 hover:bg-blue-400">Login</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;
