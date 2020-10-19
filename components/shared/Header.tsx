import Link from 'next/link';
import { useRouter } from 'next/router';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component } from 'react';
import { useUser } from './auth0Provider.tsx';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  LogOutIcon,
  MenuIcon,
} from './Icons.tsx';
import Sidebar from './Sidebar.tsx';

class Header extends Component {
  constructor(props: any) {
    super(props);
    const {
      router: {
        pathname,
        query: { inviteCode },
      },
    } = props;
    this.state = {
      direction: 'up',
      inviteCode,
      dy: 0,
      pathname,
      menuVisible: false,
      showAccount: pathname.startsWith('/account'),
      ...props,
    };
  }

  componentDidMount() {
    let isScrolling: any;
    let lastScroll = window.scrollY;
    let { direction }: { direction?: string } = this.state;

    this.setState({ dy: lastScroll });
    window.addEventListener('resize', () => this.resetMenu());
    window.addEventListener(
      'scroll',
      () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          const currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            direction = 'down';
          } else {
            lastScroll = currentScroll;
            direction = 'up';
          }
          this.setState({ direction, dy: currentScroll });
        }, 0);
      },
      false,
    );
  }

  resetMenu = () => {
    const { pathname }: any = this.state;
    this.setState({
      menuVisible: false,
      showAccount: pathname.startsWith('/account'),
    });
  };

  render() {
    const {
      menuVisible,
      showAccount,
      dashboardNav,
      dy,
      inviteCode,
      whiteNav,
    }: any = this.state;
    const wrapperClass = !dashboardNav
      ? 'fixed bg-white'
      : 'bg-white xl:relative';
    const wrapperLogoClass = !dashboardNav
      ? 'bg-transparent'
      : 'xl:bg-white bg-white';
    let navBackgroundCls;
    if (!dashboardNav && !whiteNav) {
      navBackgroundCls = dy > 0 ? 'sm:bg-white bg-white' : 'sm:bg-transparent';
    }
    const loginLink = inviteCode
      ? `/api/login?inviteCode=${inviteCode}&redirectTo=/account/rewards`
      : '/api/login?redirectTo=/account/rewards';

    const { user }: any = this.props;
    return (
      <header
        className={`${wrapperClass} ${navBackgroundCls} w-full sm:flex sm:items-center sm:justify-between md:flex-shrink-0 cc_cursor shadow-sm md:shadow-none z-50 font-sofiapro`}
        style={{ transition: '200ms' }}>
        <div
          className={`flex justify-between px-4 py-3 sm:w-72 ${wrapperLogoClass} sm:justify-center lg:py-5`}>
          <div className="flex justify-center">
            <a href="/">
              <img
                src="/static/assets/Icons/logo.svg"
                alt="logo"
                className="w-64"
              />
            </a>
          </div>
          <div className="sm:hidden  flex">
            <button
              type="button"
              onClick={() => this.setState({ menuVisible: true })}
              className="px-2 text-gray-500 hover:text-green focus:outline-none focus:text-green">
              <MenuIcon />
            </button>
          </div>
        </div>
        <nav className="sm:flex hidden sm:flex-1 sm:justify-between cc_cursor pr-5">
          <div className="block relative max-w-xs w-full" />
          <div className="flex items-center">
            <div className="pr-3 py-0 border-gray-800 flex border-b-0 whitespace-no-wrap">
              <HeaderLink text="Get Started" href="/start" />
              <HeaderLink text="About" href="/about" />
              <HeaderLink text="FAQ" href="/faq" />
              {!dashboardNav && (
                <HeaderLink
                  text={user ? 'Account' : 'Login'}
                  href={user ? '/account/rewards' : loginLink}
                />
              )}
              {(dashboardNav || user) && (
                <HeaderLink
                  text={<LogOutIcon />}
                  href="/api/logout"
                  title="Sign Out"
                />
              )}
            </div>
          </div>
        </nav>
        {menuVisible && (
          <div className="flex flex-row justify-end absolute top-0 left-0 w-screen h-screen sm:hidden text-right z-20">
            <button
              type="button"
              onClick={this.resetMenu}
              className="bg-gray-900 opacity-25 z-10 absolute top-0 left-0 w-screen h-screen"></button>
            <div className="bg-white w-3/4 h-full inline-flex flex-col shadow-lg z-20 max-w-xs overflow-y-auto">
              <button
                type="button"
                className="text-gray-500 hover:text-green focus:outline-none focus:text-green mb-6 pt-5 pr-5"
                onClick={this.resetMenu}>
                <CloseIcon className="float-right" />
              </button>
              <div className="flex-1 text-left flex flex-col">
                <a
                  href="/start"
                  className="text-gray-600 text-lg py-2 font-semibold hover:text-gray-700 px-5">
                  Get Started
                </a>
                <a
                  href="/about"
                  className="text-gray-600 text-lg py-2 font-semibold hover:text-gray-700 px-5">
                  About
                </a>
                <a
                  href="/faq"
                  className="text-gray-600 text-lg py-2 font-semibold hover:text-gray-700 px-5">
                  FAQ
                </a>
                <button
                  type="button"
                  onClick={() => this.setState({ showAccount: !showAccount })}
                  className="text-gray-600 text-lg pt-2 pb-4 flex flex-row focus:outline-none items-center font-semibold hover:text-gray-700 px-5">
                  <span className="flex-1 text-left">
                    {!dashboardNav && (
                      <Link href={user ? '/account/rewards' : loginLink}>
                        {user ? 'Account' : 'Login'}
                      </Link>
                    )}
                  </span>
                  {dashboardNav &&
                    (showAccount ? <ChevronDownIcon /> : <ChevronRightIcon />)}
                </button>
                {showAccount && dashboardNav && <Sidebar mobile />}
                {(user || dashboardNav) && (
                  <a
                    href="/api/logout"
                    className="text-gray text-lg my-5 font-semibold text-center flex flex-row items-center justify-center hover:text-gray-700">
                    <LogOutIcon className="inline-block mr-2" />
                    Log Out
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }
}

const HeaderWithRouter = (props: any) => {
  const router = useRouter();
  const { user } = useUser();
  return <Header {...props} router={router} user={user} />;
};

interface HeaderLinkProps {
  href: string;
  text: string | JSX.Element;
  title?: string;
}
function HeaderLink({ href, text, title }: HeaderLinkProps) {
  return (
    <a
      title={title}
      href={href}
      className="block px-3 mx-2 py-1 rounded font-semibold text-black hover:bg-gray-800 sm:text-sm sm:px-2 sm:text-gray-900 sm:hover:bg-gray-200">
      {text}
    </a>
  );
}

export default HeaderWithRouter;
