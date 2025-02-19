import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Person {
  name: string;
  phone: string;
}

const data: Person[] = [
  { name: "Bruno Giannoni Filho", phone: "3243-1243" },
  { name: "Bruno Luiz Vieira", phone: "3243-1245" },
  { name: "Cheila Sodre", phone: "3243-1242" },
  { name: "Diego Lima Alcantara", phone: "3243-1241" },
  { name: "Edinaldo Francisco Diniz", phone: "3243-1241" },
  { name: "Felipe dos Santos Caprara", phone: "3243-1211" },
  { name: "Felipe Roberto Leitão", phone: "3243-1212" },
  { name: "Fernando Augusto Oliveira Rossignolli", phone: "3243-1092" },
  { name: "José Carlos Gazarini Dutra", phone: "3243-1051" },
  { name: "Juliana Oliveira de Carvalho", phone: "3243-1211" },
  { name: "Juliette Maria Alfonso Frederico", phone: "3243-1242" },
  { name: "Julio Cesar Sousa", phone: "3243-1245" },
  { name: "Luis Henrique Numeriano da Silva Lima", phone: "3243-1211" },
  { name: "Kendi Souza Kurihara", phone: "3243-1245" },
  { name: "Orlando Cabral do Nascimento Junior", phone: "3243-1212" },
  { name: "Sidnei de Oliveira Fraga", phone: "3243-1051" },
  { name: "Tiago Martins Pinheiro", phone: "3243-1242" },
  { name: "Victor Alexander Menezes de Abreu", phone: "3243-1245" },
  { name: "Victor Paulon Jaremcrusk", phone: "3243-1211" },
  { name: "Vinicius de Oliveira Giuliani", phone: "3243-1245" },
  { name: "Washington Abelark Soares de Oliveira", phone: "3243-1242" },
];

export default function PeopleTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Telefone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person, index) => (
            <TableRow key={index}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
