import { useState } from "react"
import Link from "next/link"

export default function NavBar(){
    const [dropDonwMobile,setDropDonwMobile] = useState('hidden')

    function activeDropDonwMobile(){
        if(dropDonwMobile === 'hidden'){
            setDropDonwMobile(' ')
        }else{
            setDropDonwMobile('hidden')
        }
    }

    return(
        <div className={"relative select-none bg-sky-600 lg:flex lg:items-stretch w-full"}>
                <div className={"flex flex-no-shrink items-stretch h-12"}>
                    <Link href="/">
                        <a  className={"flex-no-grow text-2xl font-bold flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"}>Estaca Arapiraca</a>
                    </Link>
                    <button onClick={activeDropDonwMobile} className={"block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"}>
                        <svg className={"fill-current text-white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={[`${dropDonwMobile} lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow`]}>
                    <div className={"lg:flex lg:items-stretch lg:justify-end ml-auto "}>
                        <Link href="/">        
                            <a  className={"flex-no-grow flex-no-shrink  relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-sky-700 "}>Calendario</a>
                        </Link>
                    </div>
                </div>
        </div>
    )
}