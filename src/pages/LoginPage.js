const LoginPage = () => {
  return (
    <div>
      <label htmlFor="login">
        Login: <input id="login" type="text" />
      </label>
      <br />
      <label htmlFor="haslo">
        Haslo: <input id="haslo" type="text" />
      </label>
      <br />
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
