import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 w-full">
      <Link className="text-slate-800 font-bold" to="/">
        Human Directory
      </Link>
    </header>
  );
}
