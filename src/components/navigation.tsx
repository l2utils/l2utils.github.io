import SideNavigation from "@cloudscape-design/components/side-navigation";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return <SideNavigation activeHref={pathname} items={[
    {type: 'link', text: 'Home', href:"/"},
    {type: 'link', text: 'Calculators', href: "/calculators"},
    {type: 'expandable-link-group', text: 'Database', href: "/database", items: [
      {type: 'link', text: 'Classes', href: '/database/classes'},
    ]},
  ]} onFollow={(e) => {
    if (!e.detail.external && !e.detail.target) {
      e.preventDefault();
      router.push(e.detail.href);
    }
  }}>

  </SideNavigation>
}
