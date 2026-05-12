const request = require("supertest");
const app = require("../src/app");

test("GET / should return message", async () => {
  const response = await request(app).get("/");

  expect(response.text).toBe("DevOps CI/CD Project Running");
});