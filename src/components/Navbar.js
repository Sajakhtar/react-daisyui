// import { LoginIcon } from '@heroicons/react/outline';
import ThemeChange from './ThemeChange';
// import ConnectWallet from './ConnectWallet';


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
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Gallery
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Offers
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Brands
            </a>
          </div>
        </div>
        <div className="navbar-end">
          {/* <ConnectWallet /> */}
          <ThemeChange/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
