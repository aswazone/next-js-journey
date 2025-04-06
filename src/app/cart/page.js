'use client'
import { useParams, usePathname, useSearchParams } from "next/navigation"

const Cart = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();

    console.log(pathName)
    console.log(searchParams)
    searchParams.forEach((key,value) => console.log(key,value))

  return (
    <div>Cart</div>
  )
}

export default Cart