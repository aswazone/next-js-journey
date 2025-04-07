'use client'

import { useEffect, useState } from "react"
import useSWR from "swr"


const fetcher = (...args) => fetch(...args).then(res=>res.json())

export default function ClientSideDataFetching(){


    //-------------------------------------------------------------->   normal client data fetching
    // const [loading,setLoading] = useState(false);
    // const [users,setUsers] = useState([]);

    // async function fetchListOfUsers(){
    //     try {
    //         setLoading(true);
    //         const apiResponse = await fetch('https://dummyjson.com/users');
    //         const result = await apiResponse.json();

    //         if(result?.users){
    //             console.log(result.users)
    //             setUsers(result.users)
    //             setLoading(false);
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         setUsers([]);
    //         setLoading(false);
    //     }
    // }

    // useEffect(()=>{
    //     fetchListOfUsers();
    // },[])

    // if(loading){
    //     return <h1 className="text-lg font-bold text-red-500"></h1>
    // }

    // return (
    //     <div>
    //         <center>
    //         <h1>Client side data fetching !!</h1>
    //         <ul>
    //             {users && users.length > 0 ? users.map(user => <li key={user.id}>{user.firstName}</li>) : 'No data !!'}
    //         </ul>
    //         </center>
    //     </div>
    // )
    
    //------------------------------------------------------------------

    const {data,error,isLoading} = useSWR('https://dummyjson.com/users', fetcher);

    if(error){
        return <h1 className="text-xl font-bold text-red-500">Failed to Load !!</h1>
    }
    if(isLoading){
        return <h1 className="text-lg font-bold text-blue-500">Loading... !</h1>
    }

    return (
        <div>
            <center>
            <h1>Client side data fetching !!</h1>
            <ul>
                {data && data?.users && data?.users.length > 0 ? data?.users.map(user => <li key={user.id}>{user.firstName}</li>) : 'No data !!'}
            </ul>
            </center>
        </div>
    )
}