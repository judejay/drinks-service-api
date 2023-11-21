import { app } from "../app";
import request  from "supertest";

describe("Coffee Lover endpoint", () => {
    test("Should return get", async () => {
        const result = await request(app).get('/coffee_lover');
        expect(result.statusCode).toEqual(200);
        expect(result.text).toEqual("I like coffee!")
    });
});