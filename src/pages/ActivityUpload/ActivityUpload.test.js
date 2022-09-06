import { render } from "@testing-library/react";
import ActivityUpload from "./ActivityUpload";

describe("ActivityUpload tests", () => {
  it("should render", () => {
    const { container } = render(<ActivityUpload />);
    expect(container).toMatchSnapshot();
  });
});
