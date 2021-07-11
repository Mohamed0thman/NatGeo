import React, { useState, useEffect } from "react";

import FormInput from "../form-input/form-input.component";

import "./digit.styles.scss";

interface DigitProps {
  index: number;
  name: string;
  type: string;
  required: any;
  value: string;
  handleChange: (e: any) => void;
}

const Digit: React.FC<DigitProps> = (props: DigitProps) => {
  const [value, setValue] = useState<string>("");
  const inputs = document.getElementsByClassName("is-code-input");
  const totalValue = [].map
    .call(inputs, function (input: any, index: number) {
      return input.value;
    })
    .join("");

  useEffect(() => {
    props.handleChange({
      target: { name: props.name, value: totalValue },
    });
  }, [value, totalValue]);

  const focus = (index: number): void => {
    document.getElementById(`digit-input-${index}`)!.focus();
  };

  const focusNext = (): void => {
    const nextIndex: number = Math.min(props.index + 1, 5);
    focus(nextIndex);
  };

  const focusPrev = (): void => {
    const prevIndex: number = Math.max(0, props.index - 1);
    focus(prevIndex);
  };

  const handleOnKeyDown = (e: any): void => {
    e = e || window.event;

    if (e.key === "Backspace" || e.key === "Delete") {
      setValue("");
      focusPrev();
    }
    if (!isNaN(e.key)) {
      focusNext();
      setValue(e.key);
    }
  };

  const id: string = `digit-input-${props.index}`;
  return (
    <FormInput
      {...props}
      id={id}
      handleOnKeyDown={handleOnKeyDown}
      value={value}
      placeholder=""
      handleChange={props.handleChange}
      isCodeInput="is-code-input"
      type="tel"
    />
  );
};

export default Digit;
