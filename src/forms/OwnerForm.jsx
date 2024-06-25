import PlusIcon from "../icons/PlusIcon";
import XIcon from "../icons/XIcon";
import SelectType from "../inputs/SelectType";
import NameInput from "../inputs/NameInput";
import PercentInput from "../inputs/PercentInput";
import { Button } from "@nextui-org/react";
import newOwner from "../utils/newOwner";

export default function OwnerForm({
  id,
  owners,
  setOwners,
  owner,
  children,
  onAdd,
  onDelete,
}) {
  const setValue = (key, value) => {
    console.log(key, value);
    setOwners((owners) =>
      owners.map((owner) => {
        if (owner.id === id) {
          return { ...owner, [key]: value };
        }
        return owner;
      })
    );
  };
  const setType = (value) => setValue("type", value);
  const setName = (value) => setValue("name", value);
  const setPercentage = (value) => setValue("percentage", value);

  const maxPercentage =
    100 -
    owners
      .filter((o) => o.parentId === owner.parentId && o.id != owner.id)
      .reduce(
        (accumulator, currentValue) =>
          accumulator + Number(currentValue.percentage),
        0
      );
  console.log({ owners, owner, maxPercentage });
  return (
    <div className="mb-4">
      <div className="flex flex-row items-end p-2 pt-0">
        <SelectType value={owner.type} setValue={setType} />
        <div className="flex-grow">
          <NameInput
            names={
              owner.type === "organization"
                ? []
                : [
                    ...new Set(
                      owners
                        .filter(
                          (o) => o.type === "person" && o.name.trim() != ""
                        )
                        .map((o) => o.name)
                    ),
                  ].map((name) => ({ name }))
            }
            value={owner.name}
            setValue={setName}
          />
        </div>
        <PercentInput
          maxValue={maxPercentage}
          value={owner.percentage}
          setValue={setPercentage}
        />
        <Button
          variant="light"
          className="min-w-0 w-fit h-12 px-2 mx-1"
          onClick={onDelete}
        >
          <XIcon color="red" />
        </Button>
      </div>
      {owner.type === "organization" && (
        <div className="pl-16">
          <Button variant="bordered" className="w-full" onClick={onAdd}>
            <PlusIcon /> Add Child
          </Button>
          {children &&
            children
              .toReversed()
              .map((child) => (
                <OwnerForm
                  key={child.id}
                  id={child.id}
                  owners={owners}
                  setOwners={setOwners}
                  owner={child}
                  children={owners.filter((o) => o.parentId === child.id)}
                  onAdd={() =>
                    setOwners((owners) => [...owners, newOwner(child.id)])
                  }
                  onDelete={() =>
                    setOwners((owners) =>
                      owners.filter((o) => o.id !== child.id)
                    )
                  }
                />
              ))}
        </div>
      )}
    </div>
  );
}
