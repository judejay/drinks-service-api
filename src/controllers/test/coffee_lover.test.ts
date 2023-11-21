import { app } from "../app";

describe("Coffee Lover endpoint", () => {
    it("Should return get", ()=> {
        expect(app.get("/coffee_lover").toEqual("Coffee Lover"))
    });
})