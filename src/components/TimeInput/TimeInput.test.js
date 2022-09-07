import { render } from "@testing-library/react";
import TimeInput from "./TimeInput";

describe("TimeInput tests", () => {
  it("should render", () => {
    const { container } = render(<TimeInput />);
    expect(container).toMatchSnapshot();
  });
});
