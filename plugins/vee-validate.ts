import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Este campo é obrigatório.",
});

extend("email", {
  ...email,
  message: "Seu email precisa ser válido.",
});
