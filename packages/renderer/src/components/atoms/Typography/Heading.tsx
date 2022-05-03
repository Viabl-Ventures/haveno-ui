import type { ReactText } from "react";
import { FormattedMessage } from "react-intl";
import type { TitleProps } from "@mantine/core";
import { Title } from "@mantine/core";
import type { LangKeys } from "@constants/lang";

interface HeadingProps extends TitleProps {
  children: ReactText;
  stringId?: LangKeys;
}

export function Heading(props: HeadingProps) {
  const { children, stringId, ...rest } = props;

  return (
    <Title {...rest}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </Title>
  );
}
