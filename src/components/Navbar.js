import { LoginIcon } from '@heroicons/react/outline';
import ThemeChange from './ThemeChange';


function Navbar() {

  return (
    <div className="">
      {/* <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"> */}
      <div className="navbar mb-2 inset-x-50 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-transparent fixed bg-primary text-primary-content">


        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">
                  BRANDNAME
                </span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">
              Gallery
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">
              Offers
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">
              Brands
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-sm btn-primary mr-2">
            <LoginIcon className="h-5 w-5 mr-2"/>
            Connect
          </button>
          <ThemeChange/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
