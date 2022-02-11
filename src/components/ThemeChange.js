// import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useState, useRef, useEffect } from 'react';

function ThemeChange() {
  // const [ theme, setTheme ] = useState(document.querySelector('html').dataset.theme);

  const themeRef = useRef();

  const handleThemeIcon = () => {
    const theme = document.querySelector('html').dataset.theme;

    const sunSVG =  `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>`;

    const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>`;

    themeRef.current.innerHTML = theme === 'light' ? moonSVG : sunSVG;

  }

  useEffect(() => {
    setTimeout(() => {
      handleThemeIcon();
    }, 0.00001);
  }, []);

  return (
    <div>
      <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"  className="btn btn-square btn-accent btn-sm" onClick={handleThemeIcon} ref={themeRef}>
        {/* <MoonIcon className="h-5 w-5"/> */}
        {/* <SunIcon className="h-5 w-5"/> */}
      </button>
    </div>
  );
}

export default ThemeChange;
