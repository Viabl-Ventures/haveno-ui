import type { ButtonProps as MButtonProps, ButtonVariant } from "@mantine/core";
import { Button, Box, createStyles } from "@mantine/core";

export interface ButtonProps extends MButtonProps<"button"> {
  active?: boolean;
  bubbleText?: string;
}

interface MarketOffersFilterButtonStyleProps {
  active: boolean;
  variant: ButtonVariant;
}

export function MarketOffersFilterButton({
  bubbleText,
  className,
  active,
  variant,
  ...props
}: ButtonProps) {
  const { cx, classes } = useStyles({
    active: active || false,
    variant: variant || "outline",
  });

  return (
    <Button
      color="gray"
      variant="outline"
      radius="md"
      size="md"
      {...props}
      className={cx(classes.root, className)}
    >
      {bubbleText && <Box className={classes.bubbleText}>{bubbleText}</Box>}
      {props.children}
    </Button>
  );
}

const useStyles = createStyles(
  (theme, { active, variant }: MarketOffersFilterButtonStyleProps) => ({
    root: {
      borderColor: active ? "#111" : "#E8E7EC",
      borderWidth: active ? 2 : 1,
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      color: "#111",
      position: "relative",
    },
    bubbleText: {
      padding: "2px 4px",
      borderRadius: 15,
      boxShadow: "0 0 0 2px #fff",
      backgroundColor: "#111",
      position: "absolute",
      top: -5,
      right: -5,
      color: "#fff",
      fontSize: 10,
      lineHeight: 1,
      minWidth: 15,
    },
  })
);
