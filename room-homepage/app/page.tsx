import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";

export default function Home() {
  return (
    <div className="relative">
      {/* Nav desktop and Logo */}
      <div className="pt-5">
        <Nav />
      </div>
      {/* Nav mobile with hamburger icon */}
      <div className="absolute top-10 left-10">
        <NavMobile />
      </div>
    </div>
  );
}
