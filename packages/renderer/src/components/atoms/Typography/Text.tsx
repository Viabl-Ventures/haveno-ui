import type { ReactText } from "react";
import { FormattedMessage } from "react-intl";
import type { TextProps as MTextProps } from "@mantine/core";
import { Text as MText, createStyles } from "@mantine/core";
import type { LangKeys } from "@constants/lang";

type TextProps<TComponent> = MTextProps<TComponent> & {
  children: ReactText;
  stringId?: LangKeys;
};

export function BodyTextLg<TComponent = "p">(props: TextProps<TComponent>) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText {...rest} className={cx(className, classes.bodyLg)}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </MText>
  );
}

export function BodyText<TComponent = "p">(props: TextProps<TComponent>) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText {...rest} className={cx(className, classes.body)}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </MText>
  );
}

export function InfoText<TComponent = "p">(props: TextProps<TComponent>) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText {...rest} className={cx(className, classes.info)}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </MText>
  );
}

export function LabelText(props: TextProps<"label">) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText component="label" {...rest} className={cx(className, classes.label)}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </MText>
  );
}

const useStyles = createStyles((theme) => ({
  info: {
    color: theme.colors.gray[6],
    fontSize: "0.875rem",
  },
  body: {
    fontSize: "0.8125rem",
  },
  bodyLg: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  label: {},
}));
