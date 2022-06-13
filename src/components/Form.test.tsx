import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

describe("The behaviour of <Form />", () => {
  test("shouldn't add new participants when input is empty", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // 1 - Find input in DOM
    const inputParticipant = screen.getByPlaceholderText(
      "Add participants name"
    );
    // 2 - Find the button
    const buttonParticipant = screen.getByRole("button");
    // 3 - Assure input is in the document
    expect(inputParticipant).toBeInTheDocument();
    // 4 - Assure button is disabled
    expect(buttonParticipant).toBeDisabled();
  });

  test("should add participant if there is a name filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const inputParticipant = screen.getByPlaceholderText(
      "Add participants name"
    );
    const buttonParticipant = screen.getByRole("button");

    // 1 - arrange: add value in inputParticipant
    fireEvent.change(inputParticipant, {
      target: {
        value: "Miguel",
      },
    });

    // 2 - action: click button Add.
    fireEvent.click(buttonParticipant);
    fireEvent.click(buttonParticipant);

    // 3 - assert: assure input is focus active.
    expect(inputParticipant).toHaveFocus();

    // 4 - assert: assure input haven't a value
    expect(inputParticipant).toHaveValue("");
  });

  test("shoudn't add duplicate names in the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const inputParticipant = screen.getByPlaceholderText(
      "Add participants name"
    );
    const buttonParticipant = screen.getByRole("button");

    fireEvent.change(inputParticipant, {
      target: {
        value: "Matheus",
      },
    });
    fireEvent.click(buttonParticipant);

    fireEvent.change(inputParticipant, {
      target: {
        value: "Matheus",
      },
    });

    fireEvent.click(buttonParticipant);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe("Duplicate names can't be possible");
  });

  test("should error message out after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const inputParticipant = screen.getByPlaceholderText(
      "Add participants name"
    );
    const buttonParticipant = screen.getByRole("button");

    fireEvent.change(inputParticipant, {
      target: {
        value: "Matheus",
      },
    });
    fireEvent.click(buttonParticipant);

    fireEvent.change(inputParticipant, {
      target: {
        value: "Matheus",
      },
    });

    fireEvent.click(buttonParticipant);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      /* fire events that update state */
      jest.runAllTimers();
    });
    // wait x time

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
