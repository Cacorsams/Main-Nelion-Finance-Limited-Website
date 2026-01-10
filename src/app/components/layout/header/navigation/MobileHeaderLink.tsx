import { useState } from 'react';
import { Link, useRouter } from '@/i18n/routing';
import { HeaderItem } from '../../../../types/layout/menu';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick?: () => void }> = ({ item, onClick }) => {
  const t = useTranslations('Navigation');
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const router = useRouter();

  const handlenav = () => {
    router.push(item.href)
    if (onClick) onClick();
  }

  const path = usePathname();

  return (
    <div className="relative w-full">
      <button
        onClick={item.submenu ? handleToggle : handlenav}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-md text-black focus:outline-none dark:text-white dark:text-opacity-60 ${path === item.href ? 'bg-primary text-white dark:bg-primary dark:text-white dark:text-opacity-100' : ' text-black dark:text-white '} ${path.includes(item.href) && item.href !== '/' ? "bg-primary text-white dark:bg-primary dark:text-white dark:text-opacity-100 " : null}`}
      >
        {t(item.label as any)}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-darkmode py-2 px-3 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onClick}
              className={`block py-2 px-3  ${subItem.href === path ? '!text-primary dark:text-primary' : 'text-gray'}`}
            >
              {t(subItem.label as any)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
