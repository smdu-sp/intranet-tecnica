import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Suporte {
  name: string;
  phone: string;
  email?: string;
}

interface TabelaProps {
  data: Suporte[];
  titulo: string;
}

export default function Tabela({ data, titulo }: TabelaProps) {
  return (
    <div className="table-container max-w-3xl mx-auto">
      <div className="bg-gray-200 p-4 text-center">
        <h2 className="text-xl font-semibold">{titulo}</h2>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow >
            <TableHead>Nome</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person, index) => (
            <TableRow key={index}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.phone}</TableCell>
              <TableCell>{person.email || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
