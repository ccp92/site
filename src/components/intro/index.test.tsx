import React from "react";
import { shallow } from "enzyme";
import Intro from ".";

describe("Intro", () => {
  it("renders the link to github", () => {
    const wrapper = shallow(<Intro />);
    const actionButton = wrapper.find({ "data-test": "main-action-button" });
    expect(actionButton.length).toBe(1);
    expect(actionButton.text()).toBe("Github profile");
  });

  it("renders the link to contact me", () => {
    const wrapper = shallow(<Intro />);
    const actionButton = wrapper.find({ "data-test": "action-button" });
    expect(actionButton.length).toBe(1);
    expect(actionButton.text()).toBe("Contact Me");
  });
});
