import React from 'react';

interface ContextProps {
  user: null | object;
}
export const UserContext = React.createContext<ContextProps>({
  user: null,
});

/**
 * use to update current global var and fetch session from /api/me
 */
export const fetchUser = async () => {
  const { data: res } = await authed('/me', { validateStatus: () => true });
  const userState = res.ok ? await res.json() : null;
  return userState;
};

export const UserProvider = ({
  value,
  children,
}: {
  value: ContextProps;
  children: any;
}) => <UserContext.Provider value={value}>{children}</UserContext.Provider>;

// hook to get values of current session provider
export const useUser = () => React.useContext(UserContext);
