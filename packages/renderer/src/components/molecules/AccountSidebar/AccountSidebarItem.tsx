import { useNavigate } from "react-router-dom";
import { SecondarySidebarItem } from "@molecules/SecondarySidebar";
import { useNavLinkActive } from "@src/hooks/useNavLinkActive";

interface AccountSidebarItemProps {
  label: string;
  route: string;
}

export function AccountSidebarItem({ label, route }: AccountSidebarItemProps) {
  const isActive = useNavLinkActive({ to: route });
  const navigate = useNavigate();

  return (
    <SecondarySidebarItem
      key={label}
      label={label}
      isActive={isActive}
      onClick={() => {
        return navigate(route);
      }}
    />
  );
}
