import Tabela from "@/components/tabela";

interface Person {
  name: string;
  phone: string;
  email?: string;
}

const suporte: Person[] = [
  { name: "Bruno Giannoni Filho", phone: "3243-1243" }, 
  { name: "Diego Lima Alcantara", phone: "3243-1241" },
  { name: "Fernando Augusto Oliveira Rossignolli", phone: "3243-1092" },
  { name: "José Carlos Gazarini Dutra", phone: "3243-1051" },
  { name: "Sidnei de Oliveira Fraga", phone: "3243-1051" },  
]

const dev: Person[] = [
    { name: "Bruno Luiz Vieira", phone: "3243-1245" },
    { name: "Kendi Souza Kurihara", phone: "3243-1245" },
    { name: "Victor Alexander", phone: "3243-1245" },
    { name: "Vinicius Oliveira Giuliani", phone: "3243-1245" },  
  ]


export default function Contatos() {
  return (
    <div className="p-6">
      <Tabela data={suporte} titulo="Suporte" />
      <Tabela data={dev} titulo="Desenvolvimento" />
    </div>
    

    
  );
}
