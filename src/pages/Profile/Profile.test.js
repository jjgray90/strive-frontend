import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile tests", () => {
  it("should render", () => {
    const { container } = render(<Profile />);
    expect(container).toMatchSnapshot();
  });
});
