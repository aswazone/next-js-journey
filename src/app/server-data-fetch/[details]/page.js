
async function fetchUserDetails(currentId){
   try {
    const apiResponse = await fetch(`https://dummyjson.com/users/${currentId}`);
    const result = await apiResponse.json()
    return result;
   } catch (error) {
    throw new Error(error)
   }
}


export default async function UserDetail({params}){

    const {details} = await params;
    const user = await fetchUserDetails(details)

    return (
        <>
            {user && <h1>UserDetail of {user.firstName}</h1>}
        </>
    )
}