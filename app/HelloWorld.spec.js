// http://willcodefor.beer/react-testing-with-mocha-chai-sinon-and-gulp/
// https://github.com/robertknight/react-testing

import ReactTestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import chai from "chai";
import HelloWorld from "./HelloWorld";
import setup from "./setup";

const expect = chai.expect;

describe("HelloWorld", () => {
    it("renders 'Hello World!'", () => {
        const component = React.addons.TestUtils.renderIntoDocument(
            <HelloWorld />
        );
        const greeting = ReactDOM.findDOMNode(component.refs.greeting);
        expect(greeting.textContent).to.equal("Hello World");
    });
});