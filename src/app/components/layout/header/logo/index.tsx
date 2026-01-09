import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
        N
      </div>
      <span className="text-2xl font-bold tracking-tighter text-midnight_text dark:text-white uppercase">
        Nelion<span className="text-primary">Finance</span>
      </span>
    </Link>
  );
};

export default Logo;