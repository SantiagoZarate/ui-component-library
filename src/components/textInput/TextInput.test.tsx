import { render, screen, cleanup } from "@testing-library/react";
import { test, describe, afterEach, expect } from "vitest";
import { TextInput } from "./";

describe("Testing <TextInput /> Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("TextInpu should be on screen", () => {
    render(
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });
});
