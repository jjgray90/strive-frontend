import { render } from "@testing-library/react";
import Registration from "./Registration";

describe("Registration tests", () => {
  it("should render", () => {
    const { container } = render(<Registration />);
    expect(container).toMatchSnapshot();
  });
});
