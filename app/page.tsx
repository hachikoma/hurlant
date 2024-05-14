import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <header className="header flex justify-between bg-header bg-no-repeat bg-white items-center pl-14 pr-24 pt-16 pb-10">
        <div className="header__logo flex">
          <a
            className="pointer-events-none lg:pointer-events-auto"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo-hurlant-final.png"
              alt="Cycles Hurlant Logo"
              width={200}
              height={117}
              priority
            />
          </a>
        </div>
        <nav className="header__inline-menu text-sm font-mono">
          <ul className="flex gap-6" role="list">
            <li>
              <a
                href=""
                className="header__menu-item header__active-menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>Accueil</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>Machines</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>Projets</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>Qui sommes-nous ?</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset "
              >
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item header__menu-item list-menu__item pb-1 link link--text focus-inset "
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="banner relative flex flex-row justify-end">
          <div className="banner--image w-full">
            <div className="banner--mask absolute"></div>
            <Image
              className="w-full"
              src="/hero.webp"
              alt="Hero banner"
              width={968}
              height={500}
              priority
            />
          </div>

          <div className="banner--content h-full w-1/2 absolute flex-col justify-start flex items-center px-8">
            <h1 className="font-sans my-20">
              Les machines <br />à rêver.
            </h1>
            <div className="bg-white bg-opacity-90 px-20 py-12">
              <a
                className="text-white hover:underline uppercase font-mono flex items-center font-semibold text-xs px-4 py-3 bg-black"
                href="/"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4 text-white inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="presentation grid grid-cols-2 gap-4">
          <div>
            <h2>Titre H2</h2>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <Image
              className="w-full"
              src="/bg-block-about.jpg"
              alt="Cadre nu et fourche de vélo"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
