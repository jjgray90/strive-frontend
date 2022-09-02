import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard tests", () => {
  it("should render", () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});
