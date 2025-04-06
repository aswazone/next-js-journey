'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


//index route
export default function Home() {

  
  const handleNavigate = () =>{
    router.push('product')
  }

  return (
    <center className="p-4">
      <h1 className="text-3xl">Welcome to Next JS</h1>
      <div className="flex justify-center gap-3">
        <Link href={'product'}>Navigate to Products</Link>
        <Link href={'account'}>Navigate to Accounts</Link>
      </div>
      <div className="mt-4">
        <h1 className="text-lg font-bold">Alternative way of doing Navigate - useRouter </h1>
        <button onClick={handleNavigate} className="btn bg-amber-500 p-2 rounded hover:bg-amber-400">Navigate to Products page</button>
      </div>
    </center>
  );
}
