import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm font-golos text-[#756977] flex-wrap">
      <Link to="/" className="hover:text-[#E4610F] transition-colors">Главная</Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1">
          <Icon name="ChevronRight" size={14} className="text-[#cbbfce]" />
          {c.href ? (
            <Link to={c.href} className="hover:text-[#E4610F] transition-colors">{c.label}</Link>
          ) : (
            <span className="text-[#392F3B] font-medium">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
