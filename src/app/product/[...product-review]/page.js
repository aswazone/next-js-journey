export default async function ProductsReview({params}){
    //if there is more than one slug, params returns in array
    console.log(await params)
    return <h1>this is a products review page and this is a catch all segment / route</h1>
}