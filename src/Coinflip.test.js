import React from "react";
import { render } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

it("smoketest - renders without crashing", function () {
    render(<CoinFlip />);
});
// end

it("matches snapshot", function () {
    const { container } = render(
        <CoinFlip />);
    expect(container).toMatchSnapshot();
});