import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";


it("smoketest - renders without crashing", function () {
    render(<Coin 
        face="heads"
    />);
});
  // end

it("matches snapshot", function () {
    const { container } = render(
    <Coin
        face="heads"
    />);
    expect(container).toMatchSnapshot();
});