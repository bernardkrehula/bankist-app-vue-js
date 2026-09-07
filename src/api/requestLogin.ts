import axios from "axios";

const USERS_URL = "https://6a8757d470fbbd308f98f1ed.mockapi.io/Users";

export interface Account {
  id: string;
  name: string;
  password: string | number;
  balance: number;
}

/** What the app gets back — never the password. */
export type LoggedInAccount = Omit<Account, "password">;

export interface LoginCredentials {
  user: string;
  password: string;
}

export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoginError";
  }
}

export const requestLogin = async ({
  user,
  password,
}: LoginCredentials): Promise<LoggedInAccount> => {
  const name = user.trim();

  if (!name || !password) {
    throw new LoginError("Enter your user and PIN.");
  }

  let accounts: Account[];

  try {
    const { data } = await axios.get<Account[]>(USERS_URL, {
      params: { name },
    });
    accounts = data;
  } catch (error) {
    // mockapi answers 404 when the filter matches nothing
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new LoginError("Wrong user or PIN.");
    }
    throw new LoginError("Could not reach the server. Try again.");
  }

  const match = accounts.find(
    (account) =>
      account.name === name && String(account.password) === password,
  );

  if (!match) {
    throw new LoginError("Wrong user or PIN.");
  }

  const { password: _password, ...account } = match;
  return account;
};
