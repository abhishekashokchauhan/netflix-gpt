export const checkValidData = (email, password) => {
  const validEmail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const valiPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!validEmail) {
    return "Email address is not valid";
  }

  if (!valiPassword) {
    return "Password is not valid";
  }

  return null;
};
