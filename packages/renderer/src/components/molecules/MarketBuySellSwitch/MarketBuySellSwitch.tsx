import type { TabsProps } from "@mantine/core";
import { Tabs } from "@mantine/core";

export function MarketBuySellSwitch(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `0 solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[2]
          }`,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
          fontWeight: 500,

          "&:not(:first-of-type)": {
            borderLeft: 0,
          },
          "&:first-of-type": {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
            borderLeftWidth: 1,
          },
          "&:last-of-type": {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
            borderRightWidth: 1,
          },
        },
        tabActive: {
          color: theme.white,
          position: "relative",

          "&:before": {
            content: `""`,
            backgroundColor: theme.colors.blue[6],
            position: "absolute",
            left: -1,
            right: -1,
            bottom: -1,
            top: -1,
            borderRadius: theme.radius.md,
          },
        },
        tabInner: {
          zIndex: 1,
          position: "relative",
        },
      })}
      {...props}
    />
  );
}
