import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-roboto">
      <header
        className="
      header 
      flex 
      justify-between  
      items-center
      bg-no-repeat
      bg-[url('../public/bg-storm.png'),_url('../public/bg-storm-b.png')]
      bg-[position:60%_top,_right_bottom] 
      bg-[length:220px,_220px] 
      pl-14 pr-24 py-12"
      >
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
        <nav className="header__inline-menu">
          <ul className="flex gap-6 text-xs uppercase" role="list">
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
                <span>Les machines</span>
              </a>
            </li>

            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>L&rsquo; atelier</span>
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
          <div className="banner__image w-full">
            <div className="banner__mask absolute"></div>
            <Image
              className="w-full"
              src="/hero.webp"
              alt="Hero banner"
              width={968}
              height={500}
              priority
            />
          </div>

          <div className="banner__content h-full w-1/2 absolute flex-col justify-start flex items-center py-20 pr-24">
            <h1 className="font-orbitron uppercase mb-28">Le cuivré</h1>
            <div className="bg-white bg-opacity-90 px-20 py-10">
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
        <div className="presentation bg-orange grid grid-cols-2 gap-4">
          <div className="pl-10 pr-24 pt-24">
            <h2 className="heading2">
              Des cycles de qualité, sur-mesure et éco-responsables.
            </h2>
            <p>
              Quisque facilisis pellentesque mi non feugiat. Curabitur maximus
              mauris a erat dapibus tincidunt non vel libero. Integer id
              vulputate tortor, et elementum nulla. Etiam rutrum congue augue,
              quis hendrerit dui eleifend quis.
            </p>
            <p>
              Suspendisse condimentum porttitor erat, ut interdum nibh commodo
              vel. Quisque nec purus sit amet tellus rhoncus luctus ut id quam.
              Sed et rutrum lectus. Vivamus quis massa mauris. Praesent et massa
              sed nisl tincidunt dignissim. In hac habitasse platea dictumst.
            </p>
            <p>
              Integer vel venenatis ligula. Cras blandit pretium arcu et
              vehicula.
            </p>
            <a
              className="text-white hover:underline uppercase font-mono font-semibold text-xs px-4 py-3 bg-black"
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
          <div className="presentation__img">
            <Image
              className="w-full"
              src="/bg-intro.webp"
              alt="Vélo Peugeot PR10 blanc 1976"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="mea px-10 py-20">
          <h2 className="mea__heading mb-12">Les machines</h2>
          <div className="mea__grid">
            <ul className="mea__grid--list grid grid-cols-4 gap-3">
              <li>
                <a href="">
                  <Image
                    className=""
                    src="/home/uno.webp"
                    alt=""
                    width={400}
                    height={325}
                    priority
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    className=""
                    src="/home/dos.webp"
                    alt=""
                    width={400}
                    height={325}
                    priority
                  />
                </a>
              </li>

              <li>
                <a href="">
                  <Image
                    className=""
                    src="/home/tres.webp"
                    alt=""
                    width={400}
                    height={325}
                    priority
                  />
                </a>
              </li>

              <li>
                <a href="">
                  <Image
                    className=""
                    src="/home/cinquo.webp"
                    alt=""
                    width={400}
                    height={325}
                    priority
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="mea-button my-20 flex justify-center">
            <a
              className="text-white flex-inline hover:underline uppercase font-mono flex items-center font-semibold text-xs px-4 py-3 bg-black"
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
      </main>
    </div>
  );
}
