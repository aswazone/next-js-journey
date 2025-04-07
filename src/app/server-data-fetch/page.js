import Link from "next/link";

async function fetchListOfUsers (){
    try {
        const apiResponse = await fetch('https://dummyjson.com/users') //cache is a property which enables re-rendering
        const result = await apiResponse.json();
        return result.users;
    } catch (error) {
        throw new Error(error)
    }
}

export default async function ServerSideDataFetching(){

    const listOfUsers = await fetchListOfUsers();
    console.log(listOfUsers)

    return (
        <div>
            <h1>Client side data fetching !!</h1>
            <ul>
                {
                   listOfUsers && listOfUsers.length > 0
                   ? listOfUsers.map(user=> <li className="m-2 cursor-pointer" key={user.id}>
                        <Link href={`/server-data-fetch/${user.id}`}>{`${user.id}. ${user.firstName}`}</Link>
                    </li>) 
                   : 'No Data !!'
                }
            </ul>
        </div>
    )
}