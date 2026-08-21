import axios from "axios";

const users = [
  { id: crypto.randomUUID(), name: "js", password: 1111, balance: 15000 },
  { id: crypto.randomUUID(), name: "jd", password: 2222, balance: 25000 },
];

export const requestCreateNewUsers = async () => {
  const response = await Promise.all(
    users.map((user) =>
      axios.post("https://6a8757d470fbbd308f98f1ed.mockapi.io/Users", user),
    ),
  );
  console.log(response)
  return response;
};
