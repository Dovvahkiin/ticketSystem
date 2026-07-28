import AuthServices from "../services/authServices";
const auth = new AuthServices();

test("Should register user", async () => {
  const user = await auth.registerService({
    username: "TestUser",
    email: "test@test.com",
    password: "User123!",
  });

  expect(user.email).toBe("test@test.com");
  expect(user.role).toBe("user");
});
