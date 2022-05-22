import type { DefaultProps } from "@mantine/core";
import { Box, createStyles } from "@mantine/core";

export interface CircleIconProps extends DefaultProps {
  color?: string;
  size?: string;
  children: React.ReactNode;
}

type CircleIconStyle = Pick<CircleIconProps, "color" | "size">;

const useStyles = createStyles((theme, { color, size }: CircleIconStyle) => ({
  root: {
    borderRadius: "50%",
    height: size || 34,
    width: size || 34,
    lineHeight: "34px",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    color: color || theme.colors.gray[9],

    svg: {
      position: "relative",
      top: 2,
    },
  },
}));

export function CircleIcon({
  children,
  classNames,
  className,
  color,
  size,
  ...otherProps
}: CircleIconProps) {
  const { classes, cx } = useStyles(
    { color, size },
    {
      name: "CircleIcon",
      classNames,
    }
  );

  return (
    <Box className={cx(classes.root, className)} {...otherProps}>
      {children}
    </Box>
  );
}
