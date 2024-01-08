
import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'




function Home() {
    const [datas,setData]=useState([])
    const[Loading,setLoading]=useState(true)
    async function datafetch(){
        const result= await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(result.data)
        setLoading(false)
    }
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
        // .then((data)=>{setData(data)})
        // .catch((error)=>{console.log(error);})
        datafetch()
        
    },[])
    console.log(datas);
  return (
    <div>
        <Header/>
        {
            Loading===true?(
                <div className='w-[100%] h-96 bg-gray-800 animate-pulse flex justify-center items-center text-3xl text-white'>
                Loading....
              </div>
            ):(
                <div className='flex gap-10 p-10 flex-wrap min-w-[400px]'>
                {
                  datas.map((user, index) => {
                    return <Card key={index} user={user} />
                  })
                }
              </div>
            )
        }
        <Footer/>
    </div>
  )
}

export default Home
