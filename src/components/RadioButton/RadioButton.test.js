import { render } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton tests", () => {
  it("should render", () => {
    const { container } = render(<RadioButton />);
    expect(container).toMatchSnapshot();
  });
});
