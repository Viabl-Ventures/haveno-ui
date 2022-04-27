import { Stack, createStyles, Navbar } from "@mantine/core";

interface SubSidebarProps {
  children: JSX.Element[];
}

/**
 * Sub-sidebar.
 * @param   {SubSidebarProps}
 * @returns {JSX.Element}
 */
export function SubSidebar({ children }: SubSidebarProps) {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Navbar>{children}</Navbar>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  container: {},
}));
