import PlusIcon from "./icons/PlusIcon";
import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import OwnerForm from "./forms/OwnerForm";
import newOwner from "./utils/newOwner";
import calculateTotalPercentages from "./utils/calculateTotals";
import OwnershipTable from "./components/OwnershipTable";

function App() {
  const [owners, setOwners] = useState([newOwner()]);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    const parentIds = [
      ...new Set(
        owners.filter((o) => o.type === "organization").map((o) => o.id)
      ),
      "",
    ];
    const filtered = owners.filter((o) => parentIds.includes(o.parentId));
    if (filtered.length !== owners.length) {
      setOwners(filtered);
    }
  }, [owners]);

  useEffect(() => {
    const totals = calculateTotalPercentages(owners);
    setTotals(totals);
  }, [owners]);

  return (
    <div className="flex flex-row">
      <div className="flex-grow h-screen overflow-y-auto p-4">
        {owners
          .filter((owner) => owner.parentId === "")
          .map((owner) => (
            <OwnerForm
              key={owner.id}
              id={owner.id}
              owners={owners}
              setOwners={setOwners}
              owner={owner}
              children={owners.filter((o) => o.parentId === owner.id)}
              onAdd={() =>
                setOwners((owners) => [...owners, newOwner(owner.id)])
              }
              onDelete={() =>
                setOwners((owners) => owners.filter((o) => o.id !== owner.id))
              }
            />
          ))}
        <Button
          variant="bordered"
          className="w-full"
          onClick={() => setOwners((owners) => [...owners, newOwner()])}
        >
          <PlusIcon /> Add Owner
        </Button>
      </div>
      <div className="w-[450px] h-screen p-4">
        <OwnershipTable totals={totals} />
      </div>
    </div>
  );
}

export default App;
