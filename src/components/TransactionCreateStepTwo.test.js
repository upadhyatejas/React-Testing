import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on inital render pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "10");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "test");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
