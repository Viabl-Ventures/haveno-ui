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

export function MarketOffersFilterButton(props: ButtonProps) {
  const {
    bubbleText,
    className,
    active,
    variant = "outline",
    ...others
  } = props;

  const { cx, classes } = useStyles({
    active: active || false,
    variant: variant,
  });

  return (
    <Button
      color="gray"
      radius="md"
      size="md"
      variant={variant}
      {...others}
      className={cx(
        classes.root,
        {
          [classes.outline]: variant === "outline",
        },
        className
      )}
    >
      {bubbleText && <Box className={classes.bubbleText}>{bubbleText}</Box>}
      {props.children}
    </Button>
  );
}

const useStyles = createStyles(
  (theme, { active }: MarketOffersFilterButtonStyleProps) => ({
    root: {
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      position: "relative",
    },
    outline: {
      borderColor: active ? "#111" : "#E8E7EC",
      borderWidth: active ? 2 : 1,
      color: "#111",
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
