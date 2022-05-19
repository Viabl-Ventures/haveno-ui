import type { ModalProps as MModalProps } from "@mantine/core";
import { createStyles, Modal as MModal } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {},
  modal: {
    borderRadius: theme.radius.xl / 1.6,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
}));

export function Modal({ ...props }: MModalProps) {
  const style = useStyles();

  return (
    <MModal
      classNames={style.classes}
      overlayOpacity={0.25}
      padding={25}
      {...props}
    />
  );
}
