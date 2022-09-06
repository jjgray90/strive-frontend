import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  it("should render", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
