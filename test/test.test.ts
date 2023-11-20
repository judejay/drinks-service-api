import { hello } from "../src/controllers/test";

describe('Can run a test after importing a typescript file', () => { 
    it("Should display Message",() =>{
        expect(hello()).toBe("Hello World!");
    });
     });