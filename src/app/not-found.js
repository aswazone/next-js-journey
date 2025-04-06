const { default: Link } = require("next/link")

const Notfound=()=>{
    return (
        <div className="flex justify-center ">
            <h1 className="text-2xl font-bold text-teal-600">Page Not Found !!</h1>
            <Link className="font-bold text-blue-600 underline" href={'/'}>Home</Link>
        </div>
    )
}

export default Notfound