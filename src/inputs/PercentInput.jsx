import { Input } from "@nextui-org/react";

export default function PercentInput({ maxValue, value, setValue }) {
  const isInvalid = Number(value) > maxValue;
  return (
    <Input
      type="number"
      variant="underlined"
      label="Ownership"
      className="max-w-32 inline-block pl-4"
      classNames={{
        innerWrapper: "ml-1",
      }}
      value={value}
      isInvalid={isInvalid}
      onValueChange={setValue}
      onWheel={(e) => {
        e.target.blur();
        setTimeout(() => {
          e.target.focus();
        }, 0);
      }}
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">%</span>
        </div>
      }
    />
  );
}
