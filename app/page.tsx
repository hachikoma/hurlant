import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-roboto">
      <header
        className="
        header 
        bg-header 
        justify-between
        flex 
        items-center
        bg-no-repeat 
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
              height={113}
              priority
            />
          </a>
        </div>
        <nav className="header__inline-menu pl-16">
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
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset "
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

          <div className="banner__content h-full flex flex-col w-1/2 absolute py-20 pr-24 pl-10">
            <h2 className="banner__heading no-after uppercase heading2 heading2--orangelight mb-28 ">
              <span className="block text-sm lowercase pb-2">
                Cycles Hurlant
              </span>
              Hurlant #1 : Fury
            </h2>
            <div className="gdlr-core-pbf-element">
              <div className="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-small-left">
                <div className="gdlr-core-divider-container gdlr-core-left-align">
                  <div className="gdlr-core-divider-line gdlr-core-skin-divider">
                    <div className="gdlr-core-divider-line-bold  gdlr-core-skin-divider"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__button flex mt-12 items-center">
              <a
                className="button-primary button--orangelight flex items-center hover:underline uppercase font-mono text-xs px-4 py-3"
                href="/"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4 inline"
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
        <div className="presentation bg-orangelight grid grid-cols-2 gap-4">
          <div className="pl-10 pr-24 pt-24">
            <h2 className="heading2 heading2--green">
              Cycles Hurlant, la genèse.
            </h2>
            <p>
              Quisque facilisis pellentesque mi non feugiat. Curabitur maximus
              mauris a erat dapibus tincidunt non vel libero. Integer id
              vulputate tortor, et elementum nulla. Etiam rutrum congue augue,
              quis hendrerit dui eleifend quis.
            </p>

            <p>
              Quisque facilisis pellentesque mi non feugiat. Curabitur maximus
              mauris a erat dapibus tincidunt non vel libero. Integer id
              vulputate tortor, et elementum nulla. Etiam rutrum congue augue,
              quis hendrerit dui eleifend quis.
            </p>

            <p>
              Quisque facilisis pellentesque mi non feugiat. Curabitur maximus
              mauris a erat dapibus tincidunt non vel libero. Integer id
              vulputate tortor, et elementum nulla. Etiam rutrum congue augue,
              quis hendrerit dui eleifend quis.
            </p>

            <a
              className="button--green button-primary hover:underline uppercase font-mono font-semibold text-xs px-4 py-3 mt-10"
              href="/"
            >
              Découvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-4 text-green inline"
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

        <div className="mea px-10 py-24">
          <div className="mea__title-container flex justify-center mb-10">
            <h2 className="mea__title font-medium heading2 uppercase heading2--green heading2--border text-sm font-orbitron no-after ">
              Les dernières machines
            </h2>
          </div>
          <div className="mea__grid">
            <ul className="mea__grid-list grid grid-cols-4 gap-3">
              <li className="mea__grid-item">
                <div className="mea__cardwrapper flex flex-col-reverse">
                  <div className="mea__card-information">
                    <div className="mea__card-information__wrapper">
                      <h3 className="mea__card-information__text font-orbitron text-sm pt-3 pb-1 font-light">
                        <a href="/machines/hurlant-1">Hurlant - Fury</a>
                      </h3>

                      <div className="text-green mea__card-information__price text-sm ">
                        <span>400,00 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="mea__card-product">
                    <div className="mea__card-product__inner overflow-hidden relative">
                      <div className="mea__card-product__img hover:scale-105 cursor-pointer transition-all duration-500">
                        <Image
                          src="/home/uno.webp"
                          alt=""
                          width={400}
                          height={325}
                          priority
                        />
                      </div>
                      <div className="mea__card-product__badge mea__card-product__badge--sale absolute bottom-2 left-3 text-xs text-white ">
                        <span>Sale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mea__grid-item">
                <div className="mea__cardwrapper flex flex-col-reverse">
                  <div className="mea__card-information">
                    <div className="mea__card-information__wrapper">
                      <h3 className="mea__card-information__text font-orbitron text-sm pt-3 pb-1 font-light">
                        <a href="/machines/hurlant-1">Giant Cadex</a>
                      </h3>

                      <div className="text-green mea__card-information__price text-sm ">
                        <span>350,00 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="mea__card-product">
                    <div className="mea__card-product__inner overflow-hidden relative">
                      <div className="mea__card-product__img hover:scale-105 cursor-pointer transition-all duration-500">
                        <Image
                          src="/home/dos.webp"
                          alt=""
                          width={400}
                          height={325}
                          priority
                        />
                      </div>
                      <div className="mea__card-product__badge mea__card-product__badge--sold absolute bottom-2 left-3 text-xs text-white ">
                        <span>Sold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mea__grid-item">
                <div className="mea__cardwrapper flex flex-col-reverse">
                  <div className="mea__card-information">
                    <div className="mea__card-information__wrapper">
                      <h3 className="mea__card-information__text font-orbitron text-sm pt-3 pb-1 font-light">
                        <a href="/machines/hurlant-1">Peugeot PR10</a>
                      </h3>

                      <div className="text-green mea__card-information__price text-sm ">
                        <span>450,00 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="mea__card-product">
                    <div className="mea__card-product__inner overflow-hidden relative">
                      <div className="mea__card-product__img hover:scale-105 cursor-pointer transition-all duration-500">
                        <Image
                          src="/home/tres.webp"
                          alt=""
                          width={400}
                          height={325}
                          priority
                        />
                      </div>
                      <div className="mea__card-product__badge mea__card-product__badge--sale absolute bottom-2 left-3 text-xs text-white ">
                        <span>Sale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mea__grid-item">
                <div className="mea__cardwrapper flex flex-col-reverse">
                  <div className="mea__card-information">
                    <div className="mea__card-information__wrapper">
                      <h3 className="mea__card-information__text font-orbitron text-sm pt-3 pb-1 font-light">
                        <a href="/machines/hurlant-1">
                          Giant Peloton Superlite
                        </a>
                      </h3>

                      <div className="text-green mea__card-information__price text-sm ">
                        <span>300,00 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="mea__card-product">
                    <div className="mea__card-product__inner overflow-hidden relative">
                      <div className="mea__card-product__img hover:scale-105 cursor-pointer transition-all duration-500">
                        <Image
                          src="/home/cinquo.webp"
                          alt=""
                          width={400}
                          height={325}
                          priority
                        />
                      </div>
                      <div className="mea__card-product__badge mea__card-product__badge--sale absolute bottom-2 left-3 text-xs text-white ">
                        <span>Sale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mea-button mt-20 flex justify-center">
            <a
              className="button--green-inverse button-primary hover:underline uppercase font-mono font-semibold text-xs px-4 py-3"
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

        <div className="values bg-greenlight grid grid-cols-3 gap-2">
          <div className="values__container py-14 px-10">
            <h2 className="heading2 heading2--green no-after">Lorem ipsum</h2>
            <p>
              Quisque facilisis pellentesque mi non feugiat. Curabitur maximus
              mauris a erat dapibus tincidunt non vel libero. Integer id
              vulputate tortor, et elementum nulla. Etiam rutrum congue augue,
              quis hendrerit dui eleifend quis.
            </p>
            <a
              className="button--green button-primary hover:underline uppercase font-mono font-semibold text-xs px-4 py-3 "
              href="/"
            >
              Découvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-4 text-green inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>

          <div className="values__container py-14 px-10">
            <h2 className="heading2 heading2--green no-after">
              Dolor sit amet
            </h2>

            <p>
              Suspendisse condimentum porttitor erat, ut interdum nibh commodo
              vel. Quisque nec purus sit amet tellus rhoncus luctus ut id quam.
              Sed et rutrum lectus. Vivamus quis massa mauris. Praesent et massa
              sed nisl tincidunt dignissim. In hac habitasse platea dictumst.
            </p>

            <a
              className="button--green button-primary hover:underline uppercase font-mono font-semibold text-xs px-4 py-3 "
              href="/"
            >
              Découvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-4 text-green inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>

          <div className="values__container py-14 px-10">
            <h2 className="heading2 heading2--green no-after">
              Consectur leche
            </h2>

            <p>
              Integer vel venenatis ligula. Cras blandit pretium arcu et
              vehicula. Integer vel venenatis ligula. Cras blandit pretium arcu
              et vehicula.
            </p>
            <a
              className="hover:underline uppercase font-mono font-semibold text-xs px-4 py-3 button--green button-primary"
              href="/"
            >
              Découvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-4 text-green inline"
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
        <div className="contact">
          <div className="contact-container px-10 py-24">
            <div className="contact-text text-xs">
              <h2 className="heading2 heading2--green">Contact</h2>
            </div>
          </div>
        </div>
      </main>
      <div className="copyright">
        <div className="copyright-container bg-green justify-center flex py-3 items-center justify-center">
          <div className="copyright-text text-xs font-normal text-white">
            <p className="p-0 m-0">
              Copyright 2024 Cycles Hurlant, Tous Droits Réservés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
