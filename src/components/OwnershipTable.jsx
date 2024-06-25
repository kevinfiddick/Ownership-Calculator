import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function OwnershipTable({ totals }) {
  const grandTotal = totals.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPercentage,
    0
  );
  return (
    <Table isStriped>
      <TableHeader>
        <TableColumn key="name" allowSorting>
          NAME
        </TableColumn>
        <TableColumn key="totalPercentage" allowSorting>
          TOTAL %
        </TableColumn>
      </TableHeader>
      <TableBody>
        {totals
          .sort((a, b) =>
            (parseInt(a.totalPercentage) || a.totalPercentage) <
            (parseInt(b.totalPercentage) || b.totalPercentage)
              ? 1
              : -1
          )
          .map((owner) => (
            <TableRow key={owner.name}>
              <TableCell>{owner.name}</TableCell>
              <TableCell>{owner.totalPercentage}</TableCell>
            </TableRow>
          ))}
        <TableRow className={grandTotal != 100 ? "text-red-500" : ""}>
          <TableCell>TOTAL</TableCell>
          <TableCell>{grandTotal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
