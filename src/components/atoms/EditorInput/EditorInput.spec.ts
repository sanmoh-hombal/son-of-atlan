import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import EditorInput from ".";

describe("EditorInput", () => {
  it("Renders Properly", () => {
    const props = { modelValue: "Hello World" };
    const wrapper = mount(EditorInput, { props });

    expect(wrapper.text()).toContain(props.modelValue);
  });

  it("Sets the value", async () => {
    const wrapper = mount(EditorInput);
    const input = wrapper.find("textarea");

    const testQuery: string = "SELECT * FROM anything;";
    await input.setValue(testQuery);

    expect(input.element.value).toBe(testQuery);
  });
});
