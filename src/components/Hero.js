import { LoginIcon } from '@heroicons/react/outline';

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
                Hello there
              </h1>
          <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
          <button className="btn btn-primary">
            <LoginIcon className="h-5 w-5 mr-2"/>
            Connect Wallet
          </button>
        </div>
      </div>
      </div>
  );
}

export default Hero;
