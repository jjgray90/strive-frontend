import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput tests", () => {
  it("should render", () => {
    const { container } = render(<TextInput />);
    expect(container).toMatchSnapshot();
  });
});
