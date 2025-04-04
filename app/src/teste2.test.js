import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // ✅ separado
import { Counter } from "./teste.js";


test("deve incrementar o contador ao clicar no botão", () => {
  render(<Counter />);

  // Verifica o texto inicial
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();

  // Clica no botão
  userEvent.click(screen.getByText("Increment"));

  // Verifica se o contador foi incrementado
  expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
});