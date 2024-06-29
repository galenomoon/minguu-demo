import React, { useState } from "react";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

export default function MultipleRadioBox() {
  const [selected, setSelected] = useState("");

  const options = [
    {
      id: 1,
      label: "Ver apenas roupas masculinas",
    },
    {
      id: 2,
      label: "Ver apenas roupas femininas",
    },
    {
      id: 3,
      label: "Ver todos",
    },
  ];

  return (
    <section className="flex flex-col gap-2 py-2 w-full h-fit">
      {options.map((option) => {
        const isSelected = selected === option.id;

        return (
          <RadioBox
            key={option.id}
            label={option.label}
            isSelected={isSelected}
            checkIt={() => setSelected(option.id)}
          />
        );
      })}
    </section>
  );
}

export function RadioBox({ label = "Textinho", isSelected = false, checkIt }) {
  const Radio = isSelected
    ? MdOutlineRadioButtonChecked
    : MdOutlineRadioButtonUnchecked;

  return (
    <button onClick={checkIt} className="flex items-center gap-2 text-lg">
      <Radio size={24} className="text-primary" />
      {label}
    </button>
  );
}
