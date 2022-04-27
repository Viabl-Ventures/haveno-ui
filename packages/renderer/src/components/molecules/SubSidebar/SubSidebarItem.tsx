import { UnstyledButton, Group, Text, createStyles } from "@mantine/core";

interface SubSidebarItemProps {
  isActive?: boolean;
  label: string;
}

/**
 * Sub-sidebar menu item.
 * @param   {SubSidebarItemProps}
 * @returns {JSX.Element}
 */
export function SubSidebarItem({
  isActive = false,
  label,
}: SubSidebarItemProps) {
  const { classes } = useStyles({ isActive });
  return (
    <UnstyledButton className={classes.button}>
      <Group className={classes.group}>
        <Text className={classes.text}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const useStyles = createStyles<string, { isActive: boolean }>(
  (theme, { isActive }) => ({
    button: {
      padding: "20px 0",
      color: isActive ? "#111" : "#777",
      transition: "color 0.1s ease-in-out",

      "&:hover": {
        color: "#111",
      },
    },
    group: {
      position: "relative",
    },
    text: {
      textTransform: "uppercase",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "0.05em",
      paddingLeft: isActive ? "20px" : "0",

      "&:before": {
        content: '""',
        display: "inline-block",
        width: isActive ? "12px" : "0",
        height: "3px",
        backgroundColor: "#0B65DA",
        position: "absolute",
        top: "50%",
        marginTop: "-1.5px",
        left: "0px",
        borderRadius: "3px",
      },
    },
  })
);
