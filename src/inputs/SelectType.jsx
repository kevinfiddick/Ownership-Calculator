import PersonIcon from "../icons/PersonIcon";
import OrganizationIcon from "../icons/OrganizationIcon";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Select({ value, setValue }) {
  return (
    <Dropdown className="min-w-0 w-fit">
      <DropdownTrigger>
        <Button variant="bordered" className="min-w-0 w-fit h-12 px-2">
          {value === "person" && <PersonIcon />}
          {value === "organization" && <OrganizationIcon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={(key) => setValue(key)}>
        <DropdownItem key="organization">
          <OrganizationIcon />
        </DropdownItem>
        <DropdownItem key="person">
          <PersonIcon />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
