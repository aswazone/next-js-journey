const Products = async ({searchParams})=>{

    //for getting the query strings in server components
    const {search} = await searchParams

    console.log('Products',search)

    return (
        <center className="p-3 text-amber-900">
            <h1>Products page id: {}</h1>
        </center>
    )
}
export default Products