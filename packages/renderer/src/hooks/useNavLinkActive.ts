import { useResolvedPath, useLocation } from "react-router-dom";

interface LinkItemActiveProps {
  to: string;
  caseSensitive?: boolean;
  end?: boolean;
}

/**
 * Determines whether the given route is active.
 * @param   {LinkItemActiveProps} - Hook props.
 * @returns {boolean}
 */
export const useNavLinkActive = ({
  caseSensitive = false,
  end = false,
  to,
}: LinkItemActiveProps) => {
  const location = useLocation();
  const path = useResolvedPath(to);

  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  return (
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/")
  );
};
