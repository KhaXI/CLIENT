import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email("El email no es valido")
            .required("rulos perra"),
        password: Yup.string().required("Campo obligatorio"),
    })
}