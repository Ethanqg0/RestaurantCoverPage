import myPhoto from '../assets/logo.png'; 

export default function Nav() {
    return (<nav className="fixed top-0 left-0 right-0  z-10">
        <div className="flex justify-between items-center p-4 rounded-sm ">
            <img className="h-20 w-20 lg:ml-10 xl:ml-10 md:ml-10" src={myPhoto}></img>
        </div>
    </nav>
    )
}