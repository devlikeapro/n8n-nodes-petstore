import {Petstore} from "./Petstore.node";

test("smoke", () => {
    const node = new Petstore()
    expect(node.description.properties).toBeDefined()
})
