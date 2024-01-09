/* eslint-disable react/prop-types */
function Card({user}) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          ID: {user.id}
        </div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
          {user.name}
        </h2>
        <p className="mt-2 text-gray-500">Username: {user.username}</p>
        <p className="mt-2 text-gray-500">Email: {user.email}</p>
        <p className="mt-2 text-gray-500">Website: {user.website}</p>
      </div>
    </div>
    )
  }
  
  export default Card