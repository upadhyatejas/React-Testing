import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "../../TransactionCreateStepTwo";

test("on initial render pay button is disabled and is enabled only when amount and note is filled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "10");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "test");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
