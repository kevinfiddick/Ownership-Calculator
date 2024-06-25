import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function NameInput({ names, value, setValue }) {
  return (
    <Autocomplete
      allowsCustomValue
      label="Name"
      variant="underlined"
      className="ml-4 h-12"
      defaultItems={names}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[48px]",
        },
      }}
      onInputChange={setValue}
      inputValue={value}
    >
      {(item) => {
        return <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>;
      }}
    </Autocomplete>
  );
}
