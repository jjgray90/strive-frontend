import { render } from "@testing-library/react";
import Login from "./Login";

describe("Login tests", () => {
  it("should render", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
