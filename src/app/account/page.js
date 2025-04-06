import { redirect } from "next/navigation";

export default function Accounts(){
        //make a conditonal redirect
        let userProfileInfo = null;
        if(!userProfileInfo) redirect('profile')
            
    return <div className="p-3 bg-teal-800">
        <h1>Accounts page</h1>
    </div>
}