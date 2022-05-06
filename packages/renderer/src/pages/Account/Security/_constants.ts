import * as Yup from "yup";

export const WIDTH = 475;
const MIN_PASSWORD_CHARS = 8;

export const AccountSecurityFormSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(
      MIN_PASSWORD_CHARS,
      `Password is too short - should be ${MIN_PASSWORD_CHARS} chars minimum.`
    )
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  currentPassword: Yup.string().required("Current password is required"),
});
