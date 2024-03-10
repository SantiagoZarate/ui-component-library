import { render, screen, cleanup } from "@testing-library/react";
import { test, describe, afterEach, expect } from "vitest";
import { TextInput } from "./";

describe("Testing <TextInput /> Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("TextInput should be wrapped screen", () => {
    render(<TextInput.Input />, {
      wrapper: TextInput.Root,
    });

    const inputWrapper = screen.getByTestId("text-input-root");
    expect(inputWrapper).toBeDefined();
  });

  test("TextInput should be on screen", () => {
    render(<TextInput.Input />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });
});
