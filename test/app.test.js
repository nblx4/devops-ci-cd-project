const request = require("supertest");
const app = require("../src/app");

test("GET / should load CI/CD Pipeline Monitor", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("CI/CD Pipeline Monitor");
});