import React from 'react';
import auth0 from '@utils/auth0';
import { fetchUser, UserProvider } from './auth0Provider';

/**
 * withAuth auth0 SSR wrapper
 * @param InnerComponent
 * @param strictlyProtected
 * @description React Functional wrapper, accepts 2 param, 2nd boolean param dictate if the session is strict
 */
export default function withAuth(
  InnerComponent: any,
  strictlyProtected = false,
) {
  const Wrapper = ({ user }: any) => {
    return (
      <UserProvider value={{ user }}>
        <InnerComponent />
      </UserProvider>
    );
  };
  Wrapper.getInitialProps = async (ctx: any) => {
    if (!ctx.req) {
      const user: any = await fetchUser();
      return {
        user,
      };
    }
    let session: any = await auth0.getSession(ctx.req);
    session = !session ? { user: null } : session;
    if (strictlyProtected && !session.user) {
      ctx.res.writeHead(302, {
        Location: '/api/login',
      });
      ctx.res.end();
    }
    return { user: session?.user };
  };
  return Wrapper;
}
