function Card({user}) {
    return (
      <div className='bg-gray-400 w-64 h-64 border-black border rounded-md'>
          {user.name}
          <br />
          {user.email}
      </div>
    )
  }
  
  export default Card