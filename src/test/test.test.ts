import { hello } from "../controllers/initial";

describe('Can run a test after importing a typescript file', () => { 
    it("Should display Message",() =>{
        expect(hello()).toBe("Hello World!");
    });
     });