import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [ifSubscribed, updateSubscribedState] = useState(false);

  const validateEmail = (str: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(str);
  };
  const submitSubscribeRequest = async () => {
    if (validateEmail(email)) {
      // hide backend API address from public
      const { status } = await authed.post('/subscribe', {
        email,
      });
      if (status === 200) {
        updateSubscribedState(true);
      }
    }
  };
  const updateEmail = (el: any) => {
    /**
     * Return Key
     * keyCode = 13
     * KeyText = "Enter"
     */
    if (el.keyCode === keyCode.KEY_RETURN) {
      submitSubscribeRequest();
      return;
    }
    setEmail(el.target.value);
  };
  return (
    <footer className="bg-brown text-white sm:pt-12 pt-5 pb-8 lg:px-4 px-1 font-sofiapro overflow-hidden">
      <div className="mx-auto sm:flex block max-w-screen-xl">
        <div className="sm:w-1/3 mx-auto justify-center block sm:pb-0 pb-5 md:pl-4 ml-4 lg:ml-0 sm:text-left text-center">
          <Link href="/">
            <a href="/" className="block">
              <img
                src="/static/assets/Icons/icon-w.svg"
                style={{ width: '250px' }}
                className="sm:mx-0 mx-auto object-contain"
                alt="logo"
              />
            </a>
          </Link>
          <div className="block w-full">
            <a
              href="/static/assets/files/Lighthouse-IABS-Form.pdf"
              className="block font-sofiapro font-thin text-xs py-2"
              target="_blank"
              download="Lighthouse-IABS-Form.pdf"
            >
              Texas Real Estate Commission Information About Brokerage Services
            </a>
          </div>
          <div className="block w-full">
            <a
              href="/static/assets/files/Consumer-Protection-Notice.pdf"
              className="block text-xs font-sofiapro font-thin py-2"
              target="_blank"
              download="Consumer-Protection-Notice.pdf"
            >
              Texas Real Estate Commission Consumer Protection Notice
            </a>
          </div>
        </div>
        <div className="w-full flex flex-wrap text-sm lg:mt-6 md:mt-0 ml-4">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
            <li className="inline-block py-2 px-3 text-orange  uppercase font-medium tracking-wide">
              Learn
            </li>
            <li>
              <Link href="/learn">
                <a
                  href="/learn"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  How it works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a
                  href="/faq"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  FAQ
                </a>
              </Link>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
            <li className="inline-block py-2 px-3 text-orange uppercase font-medium tracking-wide">
              Company
            </li>
            <li>
              <Link href="/about">
                <a
                  href="/about"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a
                  href="/privacy"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  Privacy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a
                  href="/terms"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  Terms of Service
                </a>
              </Link>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
            <li className="inline-block py-2 px-3 text-orange uppercase font-medium tracking-wide">
              Explore
            </li>
            <li>
              <Link href="/start">
                <a
                  href="/start"
                  className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">
                  Get Started
                </a>
              </Link>
            </li>
          </ul>

          <div className="text-gray-700 flex flex-col xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-full">
            <div className="py-2 px-3 text-orange uppercase font-medium tracking-wide sm:inline-block hidden">
              Subscribe
            </div>
            <div className="flex mt-3 sm:px-3 pl-3 pr-8 w-full pb-1">
              {ifSubscribed && (
                <p className="text-white font-sofiapro">
                  Successfully subscribed!
                </p>
              )}
              {!ifSubscribed && (
                <div className="bg-white rounded-lg w-full">
                  <div className="flex w-full">
                    <input
                      type="email"
                      className="rounded-lg sm:pl-2 pl-1 appearance-none text-gray sm:text-sm text-xs focus:outline-none w-full sm:hidden block"
                      placeholder="Enter email to subscribe"
                      defaultValue={email}
                      onKeyUp={(el: any) => updateEmail(el)}
                    />
                    <input
                      type="email"
                      className="rounded-lg sm:pl-2 pl-1 appearance-none text-gray sm:text-sm text-xs focus:outline-none w-full sm:block hidden"
                      placeholder="Enter your email"
                      defaultValue={email}
                      onKeyUp={(el: any) => updateEmail(el)}
                    />
                    <button
                      onClick={() => submitSubscribeRequest()}
                      className="w-2/12 p-2 text-sm bg-white rounded-lg font-semibold uppercase lg:w-auto text-orange">
                      ›
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center">
        <div className="flex justify-center content-center mt-2">
          <a
            className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline"
            href="http://www.facebook.com/lighthouse.rewards">
            <svg
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
            </svg>
          </a>
          <a
            className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline"
            href="http://www.twitter.com/lhapts">
            <svg
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
            </svg>
          </a>
          <a
            className="block flex items-center text-gray-300 hover:text-white no-underline"
            href="https://instagram.com/lighthouserewards">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="text-white"
              width="26px"
              height="26px">
              <path
                fill="#fff"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
