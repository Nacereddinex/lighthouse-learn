import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CashIcon,
  CashIconSolid,
  ChevronRightIcon,
  ClockIcon,
  ClockIconSolid,
  CogIcon,
  CogIconSolid,
  GiftIcon,
  GiftIconSolid,
  HomeIcon,
  HomeIconSolid,
} from './Icons.tsx';

interface Props {
  mobile?: boolean;
}

export default function Sidebar({ mobile }: Props): JSX.Element {
  const { pathname } = useRouter();

  return (
    <section className="bg-white xl:w-72">
      <div
        className={`xl:h-full ${mobile
            ? 'flex flex-col bg-gray-100'
            : 'hidden xl:flex xl:flex-col pt-5'
          } xl:justify-between`}>
        <div className="xl:block xl:overflow-y-auto justify-center text-white">
          {/* hidden for issue lighthouse-next/#115 */}
          {/* <NavItem
            label="Dashboard"
            href="/account/dashboard"
            icon={<HomeIcon />}
            selectedIcon={<HomeIconSolid />}
            selected={pathname === '/account/dashboard'}
            mobile={mobile}
          />
          <NavItem
            label="History"
            href="/account/history"
            icon={<ClockIcon />}
            selectedIcon={<ClockIconSolid />}
            selected={pathname === '/account/history'}
            mobile={mobile}
          />
          <NavItem
            label="Refer &amp; Earn"
            href="/account/refer"
            icon={<GiftIcon />}
            selectedIcon={<GiftIconSolid />}
            selected={pathname === '/account/refer'}
            mobile={mobile}
          />
          <NavItem
            label="Account Preferences"
            href="/account/user"
            icon={<CogIcon />}
            selectedIcon={<CogIconSolid />}
            selected={pathname === '/account/user'}
            mobile={mobile}
          /> */}
          <NavItem
            label="Cash Back"
            href="/account/rewards"
            icon={<CashIcon />}
            selectedIcon={<CashIconSolid />}
            selected={pathname === '/account/rewards'}
            mobile={mobile}
          />
        </div>
      </div>
    </section>
  );
}

interface NavItemProps {
  label: string;
  href: string;
  icon: JSX.Element;
  selectedIcon?: JSX.Element;
  selected?: boolean;
  mobile?: boolean;
}
export function NavItem({
  label,
  href,
  icon,
  selectedIcon,
  selected,
  mobile,
}: NavItemProps): JSX.Element {
  let classes = `flex font-eina3semibold py-4 border-l-4 flex justify-left items-center px-5 font-bold ${selected
      ? 'text-gray-900 border-green'
      : 'text-gray-600 border-white hover:border-gray hover:text-gray-700'
    }`;
  if (mobile) {
    classes = `flex py-3 flex justify-left items-center px-5 font-medium ${selected ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'
      }`;
  }

  return (
    <Link href={href}>
      <a className="no-underline hover:no-underline" href={href}>
        <div className={classes}>
          <span className={selected ? 'text-orange' : ''}>
            {selected ? selectedIcon : icon}
          </span>
          <span className="pl-2 flex-1">{label}</span>
          {selected && !mobile && <ChevronRightIcon />}
        </div>
      </a>
    </Link>
  );
}
