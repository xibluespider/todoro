import React from "react";
import { Slider, Button } from "@nextui-org/react";
import { Volume1, Volume2 } from "lucide-react";

export default function SliderWithSideButton({
  label,
  value,
  setValue,
  minValue,
  maxValue,
  step,
}) {
  return (
    <Slider
      label={label}
      size="sm"
      step={step}
      maxValue={maxValue}
      minValue={minValue}
      value={value}
      hideValue={true}
      startContent={
        <Button
          isIconOnly
          radius="full"
          variant="light"
          onPress={() =>
            setValue((prev) => (prev > minValue ? prev - step : prev))
          }
        >
          <Volume1 className="text-2xl" />
        </Button>
      }
      endContent={
        <Button
          isIconOnly
          radius="full"
          variant="light"
          onPress={() =>
            setValue((prev) => (prev < maxValue ? prev + step : prev))
          }
        >
          <Volume2 className="text-2xl" />
        </Button>
      }
      onChange={setValue}
    />
  );
}
