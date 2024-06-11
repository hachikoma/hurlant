import Image from 'next/image';
import SVGInsta from '@/app/ui/instagram';

export default function Header() {
  return (
    <>
      <header
        className="
        header 
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
          <ul className="flex gap-6 items-center text-xs uppercase" role="list">
            <li>
              <a
                href=""
                title="Accueil"
                className="header__menu-item header__active-menu-item list-menu__item pb-1 link link--text focus-inset"
              >
                <span>Accueil</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="header__menu-item list-menu__item pb-1 link link--text focus-inset"
                title="Les machines"
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
                <span className="hidden">Instagram</span>
                <SVGInsta />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
