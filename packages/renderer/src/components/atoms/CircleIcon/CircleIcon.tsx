import { Box } from "@mantine/core";

export interface CircleIconProps {
  children: React.ReactNode;
}

export function CircleIcon({ children }: CircleIconProps) {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        height: 34,
        width: 34,
        lineHeight: "34px",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
}
