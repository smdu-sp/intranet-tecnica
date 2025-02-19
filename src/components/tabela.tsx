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
          <TableRow className="bg-gray-100">
            <TableHead className="text-gray-900">Nome</TableHead>
            <TableHead className="text-gray-900">Telefone</TableHead>
            <TableHead className="text-gray-900">E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person, index) => (
            <TableRow key={index} className="hover:bg-gray-200">
              <TableCell className="bg-white text-gray-900">{person.name}</TableCell>
              <TableCell className="bg-white text-gray-900">{person.phone}</TableCell>
              <TableCell className="bg-white text-gray-900">{person.email || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
