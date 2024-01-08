
import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import Card from '../components/Card'




function Home() {
    const [datas,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
        .then((data)=>{setData(data)})
        .catch((error)=>{console.log(error);})
    },[])
    console.log(datas);
  return (
    <div>
        <Header/>
        <div className='flex gap-10 p-10 flex-wrap min-w-[400px]'>
            {
              datas.map((user, index) => {
                return <Card key={index} user={user} />
              })
            }
          </div>
        <Footer/>
    </div>
  )
}

export default Home
