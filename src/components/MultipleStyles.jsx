import React, { useEffect, useState } from "react";
import { stylesMock } from "@/mocks/styles-mock";

export default function MultipleStyles({
  search = "",
  isRow = false,
  setStylesIds = () => {},
  stylesIds = [],
}) {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [styles, setStyles] = useState(stylesMock);
  const hasStylesIds = stylesIds.length;

  useEffect(() => {
    if (search) {
      const filteredStyles = stylesMock.filter((style) =>
        style.name.toLowerCase().includes(search.toLowerCase())
      );
      setStyles(filteredStyles);
    } else {
      setStyles(stylesMock);
    }
  }, [search]);

  useEffect(() => {
    if (hasStylesIds) {
      setStyles(stylesMock.filter((style) => stylesIds.includes(style.id)));
    }
  }, [stylesIds]);

  useEffect(() => {
    setStylesIds(selectedStyles);
  }, [selectedStyles]);

  function handleSelectStyle(style) {
    const isSelected = selectedStyles.includes(style.id);

    if (isSelected) {
      setSelectedStyles(selectedStyles.filter((id) => id !== style.id));
    } else {
      setSelectedStyles([...selectedStyles, style.id]);
    }
  }

  return (
    <section
      className={`flex gap-2 w-full my-2 ${
        isRow ? "!flex-no-wrap overflow-x-auto h-[50px]" : "flex-wrap !h-fit"
      } ${hasStylesIds ? "justify-center" : "justify-start"}`}
    >
      {styles.map((style) => {
        const isSelected = selectedStyles.includes(style.id);

        return (
          <button
            onClick={() => (hasStylesIds ? {} : handleSelectStyle(style))}
            key={style.id}
            className={
              "border-2 font-mono font-medium rounded-full h-fit text-nowrap whitespace-nowrap px-2 py-1 " +
              (isSelected
                ? "border-primary text-primary bg-primary/20 font-bold"
                : "")
            }
          >
            {style.name}
          </button>
        );
      })}
    </section>
  );
}
