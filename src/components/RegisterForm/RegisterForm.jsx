import React, { useState } from "react";

// Создать управляемые компоненты. 
// В этом компоненте создать функцию, которая будет отправлять POST (email, password)
// В ответ на POST будет приходить зарегистрированный пользователь
// Отобразить его в консоли

const RegisterForm = ({ styles }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className={styles.input}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="login" className={styles.label}>
          Login
        </label>
        <input
          type="text"
          placeholder="Login"
          name="login"
          className={styles.input}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="passworld"
          placeholder="pass"
          name="password"
          className={styles.input}
        />
      </div>
      <input type="submit" value="Register" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
