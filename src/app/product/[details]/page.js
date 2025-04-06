//params property allows to get params id;
export default async function ProductDetails({params}){
    //for getting params in url in server components
    //dont forget to make async
    const {details} = await params
    console.log(details)

    return <h1>Products details page id :{details}</h1>
}