import React from "react";
import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";


describe("Testing Emoji Search", () => {

  beforeEach(() => {
    render(<App></App>)

  });
  test('Header rendered check ', () => {
    expect(screen.getByText(/Emoji Search/i)).toBeInTheDocument();
  });
  test("Emoji list Rendered successfully", () => {
    expect(screen.getAllByText("Click to copy emoji")).toHaveLength(20);
  });

  test("Emoji filtering is  working", () => {
    const emoji = "Heart";
    const input = screen.getByRole("textbox", {placeholder: /Search for emoji/i});
    fireEvent.change(input, { target: { value: emoji } });
    expect(screen.getByText(emoji)).toBeInTheDocument

  });
  test("Copy emoji is working", () => {
    let list = screen.getByText(/relaxed/i);
    let text = "Relaxed";
    userEvent.click(list);

    expect(list).toHaveTextContent(text);

  })




});
