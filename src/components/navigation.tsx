import SideNavigation from "@cloudscape-design/components/side-navigation";
import { useRouter } from "next/navigation";

interface NavigationProps {
  activeHref: string;
}

export default function Navigation({activeHref}: NavigationProps) {
  const router = useRouter();

  return <SideNavigation activeHref={activeHref} items={[
    {type: 'link', text: 'Home', href:"/"},
    {type: 'link', text: 'Calculators', href: "/calculators"},
  ]} onFollow={(e) => {
    if (!e.detail.external && !e.detail.target) {
      e.preventDefault();
      router.push(e.detail.href);
    }
  }}>

  </SideNavigation>
}
