// "use client"

// import { registerThunk } from '@/lib/redux/auth/authThunk';
// import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'

// const RegisterClient = () => {

//     const dispatch = useAppDispatch()
//     const {loading, error, user} = useAppSelector((state) => state.auth ) 

//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword ] = useState("")

//     const [open, setOpen] = useState(false)

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(registerThunk({ name, email, password }));
//   };

//   React.useEffect(() => {
//   if (user) {
//     setOpen(false);
//   }
// }, [user]);

//   if(user) {
//     return null
//   }

//   return (

//     <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="text-sm font-semibold hover:cursor-pointer hover:text-darkColor hoverEffect"
//       >
//         Register
//       </button>

    
//       {open && (
//         <form onSubmit={handleSubmit} className="absolute right-0 mt-2 w-64 p-4 bg-white shadow-lg rounded-md flex flex-col gap-3 z-50">
//       <input
//         placeholder="Name"
//         className="border px-3 py-2 rounded text-sm"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         placeholder="Email"
//         className="border px-3 py-2 rounded text-sm"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="border px-3 py-2 rounded text-sm"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <button disabled={loading} className="bg-black text-white py-2">
//         {loading ? "Registering..." : "Register"}
//       </button>
//     </form>

//       ) }

      
//    </div>
//   )
// }

// export default RegisterClient