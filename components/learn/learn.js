import Link from 'next/link';

import LearningBlock from './LearningBlock';

const HowItWorks = () => {
  return (
    <div className="border-0 rounded">
      <div className="text-green-800 bg-gray-100 pt-6 mx-auto max-w-screen-xl">
        <div className=" xl:px-20 lg:px-10 md:px-6 sm:px-3 px-0 lg:pb-14 md:pb-8 sm:pb-4 pb-0">
          <h1
            className=" 
         sm:text-left text-center
        text-green font-semibold md:text-5xl text-4xl font-P22-Mackinac-Pro py-2">
            Let's talk more about
            <br />
            <span className="pl-1">
            the cash back.
            </span>
          </h1>
          <p className="text-green-900 font-medium text-xl font-sofiapro sm:text-left text-center sm:pb-5 pb-10 mx-auto sm:w-full w-3/4">
            Sounds unbelievable, right? Let's turn you into a believer — here's
            how it works.
          </p>
        </div>
        <LearningBlock
          img="/static/assets/images/l1image.png"
          title={
            <>
              Move into an apartment
              <br />
              that offers cash back
            </>
          }
          description={
            <>
              Lighthouse works with over 7,000 buildings to bring cash back to
              you. Apply through Lighthouse and we'll handle the rest.
            </>
          }
        />
        <LearningBlock
          direction="right"
          img="/static/assets/images/l2image.png"
          title={
            <>
              Connect your bank
              <br />
              account
            </>
          }
          description={
            <>
              First, you connect your bank info to Lighthouse to get paid easily
              and quickly when the time comes! We use&nbsp;
              <a href="http://www.plaid.com/" className="underline">
                Plaid
              </a>
              &nbsp;to make sure that your bank info is super secure.
            </>
          }
        />
        <LearningBlock
          img="/static/assets/images/l3image.png"
          title={<>Pay that rent</>}
          description={
            <>
              You, being the stellar tenant that you are, pay your rent on time.
              Easy peasy!
            </>
          }
        />
        <LearningBlock
          direction="right"
          img="/static/assets/images/l4image.png"
          title={
            <>
              Math & business
              <br />
              magic
            </>
          }
          description={
            <>
              This part is a little more complex so we won't get into the
              details on this page,
              <Link href="/faq">
                <a
                  href="/faq"
                  className="underline text-blue-300 cursor-pointer pl-1">
                  but you can get into the nitty gritty here if you want to
                  understand more.
                </a>
              </Link>
            </>
          }
        />
        <LearningBlock
          title={
            <>
              Reap the reward of
              <br />
              being a great tenant!
            </>
          }
          img="/static/assets/images/l5image.png"
          description={
            <>
              A few days after paying your rent on time, you'll get your cash
              back deposited directly into your bank account.
            </>
          }
        />
      </div>
      {/* <div className="bg-lightgray py-20">
        <div className="xl:py-20 lg:py-16 md:py-12 sm:py-10 py-5">
          <h1 className="text-black font-P22-Mackinac-Pro font-medium text-4xl py-5 text-center flex justify-center content-center">
            Curious about eligibility?
          </h1>
          <p className="text-gray font-sofiapro font-light px-3 text-1xl xl:text-xl xl:pb-20 lg:pb-16 md:pb-10 sm:pb-8 pb-5 text-center flex justify-center content-center">
            Maybe you're coming from a broken lease, have a previous eviction,
            <br /> or bad credit. Visit our FAQ section to learn about
            eligibility.
          </p>
          <div className="w-full  justify-center content-start m-auto text-center">
            <Link href="/faq">
              <button
                type="button"
                className="bg-orange text-white block m-auto content-center justify-start font-sofiapro rounded-full "
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  width: '300px',
                  height: '56px',
                  textAlign: 'left',
                  paddingLeft: 20,
                  position: 'relative',
                }}>
                Visit FAQ
                <svg
                  style={{
                    lineHeight: '56px',
                    display: 'block',
                    top: 16,
                    right: 16,
                    position: 'absolute',
                  }}
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    y1="-1"
                    x2="14.6835"
                    y2="-1"
                    transform="matrix(0.735931 0.677056 -0.735931 0.677056 10.3884 2)"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    y1="-1"
                    x2="14.6835"
                    y2="-1"
                    transform="matrix(0.735931 -0.677056 0.735931 0.677056 10.6458 21.6465)"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 10.6465L21 10.6465"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    */}
    </div>
  );
};

export default HowItWorks;
