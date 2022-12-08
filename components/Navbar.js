import Link from 'next/link'
import { useState } from 'react'
function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <p className="text-xl font-semibold">Amichand Yadav</p>
            </div>
            <div className="flex flex-col ml-4">
                <Link  href="/" legacyBehavior onClick={() => setTimeout(() => {setOpen(!open)}, 100)} >
                 <a className="text-xl font-medium my-4">
                    HOME
                </a>
                </Link>
                <Link  href="/#about" legacyBehavior onClick={() => setTimeout(() => {setOpen(!open)}, 100)} >
                 <a className="text-xl font-medium my-4">
                    ABOUT
                </a>
                </Link>
                <Link  href="#skills" legacyBehavior onClick={() => setTimeout(() => {setOpen(!open)}, 100)} >
                 <a className="text-xl font-medium my-4">
                    SKILLS
                </a>
                </Link>
                <Link  href="/#projects" legacyBehavior onClick={() => setTimeout(() => {setOpen(!open)}, 100)} >
                 <a className="text-xl font-medium my-4">
                    PROJECTS
                </a>
                </Link>
                <Link  href="/#contact" legacyBehavior onClick={() => setTimeout(() => {setOpen(!open)}, 100)} >
                 <a className="text-xl font-medium my-4">
                    CONTACT
                </a>
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link  href="/" legacyBehavior>
                <a className="text-2xl font-semibold" >Amichand Yadav</a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                <NavLink to="/">
                        HOME
                    </NavLink>
                    <NavLink to="/#about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/#skills">
                        SKILLS
                    </NavLink>
                    <NavLink to="/#projects">
                        PROJECTS
                    </NavLink>
                    <NavLink to="/#contact">
                        CONTACT
                        </NavLink>
                </div>
            </div>
        </nav>
    )
}