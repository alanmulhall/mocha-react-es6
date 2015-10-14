// http://willcodefor.beer/react-testing-with-mocha-chai-sinon-and-gulp/
// https://github.com/robertknight/react-testing

import React from "react/addons";
import chai from "chai";
import HelloWorld from "./HelloWorld";
import setup from "./setup";

let expect = chai.expect;

describe("HelloWorld", () => {

    it("renders 'Hello World!'", () => {
        let helloWorld;
        const item = React.addons.TestUtils.renderIntoDocument(
            <HelloWorld />
        );
        const greeting = React.findDOMNode(item.refs.greeting);

        expect(greeting.textContent).to.equal("Hello World!");
    });
});