import AuthServices from "../services/authServices";
import request from "supertest";
import app from "../app";
const auth = new AuthServices();

describe("Auth register service test", () => {
  test("Should register user", async () => {
    const user = await auth.registerService({
      username: "TestUser",
      email: "test@test.com",
      password: "User123!",
    });
    expect(user.email).toBe("test@test.com");
    expect(user.role).toBe("user");
  });
});

describe("POST /register", () => {
  it("Should register new user using /register api with status code 201", async () => {
    const response = await request(app).post("/register").send({
      username: "TestUse2r",
      email: "te2st@test.com",
      password: "Use2r123!",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
  });
});

describe("Auth login service test", () => {
  test("Should reject login with invalid credentials", async () => {
    await expect(
      auth.loginService({
        username: "WhoAmI",
        password: "ThisIsN0TMyP4SsW0rD!",
      }),
    ).rejects.toThrow("Invalid credentials");
  });
});
