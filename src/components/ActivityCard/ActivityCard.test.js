import { render } from "@testing-library/react";
import ActivityCard from "./ActivityCard";

describe("ActivityCard tests", () => {
  it("should render", () => {
    const { container } = render(<ActivityCard />);
    expect(container).toMatchSnapshot();
  });
});
