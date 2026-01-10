import Image from 'next/image';
import { Link } from '@/i18n/routing';

const Logo: React.FC = () => {

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/nel.png"
        alt="Nelion Finance Logo"
        width={80}
        height={80}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="text-2xl font-bold tracking-tighter text-midnight_text dark:text-white uppercase">
        Nelion<span className="text-primary">Finance</span>
      </span>
    </Link>
  );
};

export default Logo;