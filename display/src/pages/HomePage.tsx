import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
  return (
      <div>
        <Header />
        <section className="m-[12%] items-center w-2xl">
          <Link to="/topic" className="w-4xs ">
            <p className="text-2xl text-white font-extralight pl-5">
              NeuraCET x DRISHTI 26 presents
            </p>
            <p className="text-8xl font-bold pl-5 font-orbitron text-amber-400">
              AI ARENA
            </p>
          </Link>
        </section>
        
      </div>
  )
}