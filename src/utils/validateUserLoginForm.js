export const validateUserLoginForm = (values) => {
    const errors = {};
    if (values.username == "") { errors.username = "Required"}
    else if (values.username.length < 6 || values.username.length > 15) { errors.username = errors.username = "Must be between 6 and 15 characters." }
    if (values.password == "") { errors.password = "Required"}
    else if (values.password.length < 8) { errors.password = "Must be more than 8 characters"}
    return errors;
}