import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-between items-start">
        <div className="w-[20%]">
            <Link to="/" className="flex p-5 items-center gap-3">
                <img src="/neuracet-white.svg" alt="NeuraCET" className="h-10" />
                <p className="text-[2.5rem]  font-extralight text-white">NeuraCET</p>
            </Link>
        </div>
        <img src="/drishti-logo.png" alt="Drishti" className="h-35 p-5 "/>
    </header>
  )
}