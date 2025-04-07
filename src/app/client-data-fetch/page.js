'use client'

import { useEffect, useState } from "react"

export default function ClientSideDataFetching(){

    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);

    async function fetchListOfUsers(){
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users){
                console.log(result.users)
                setUsers(result.users)
                setLoading(false);
            }

        } catch (error) {
            console.log(error)
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    },[])

    if(loading){
        return <h1 className="text-lg font-bold text-red-500"></h1>
    }

    return (
        <div>
            <center>
            <h1>Client side data fetching !!</h1>
            <ul>
                {users && users.length > 0 ? users.map(user => <li key={user.id}>{user.firstName}</li>) : 'No data !!'}
            </ul>
            </center>
        </div>
    )
}