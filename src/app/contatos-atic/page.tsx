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

  const chefe: Person[] = [
    { name: "Carlos Eduardo Moraes", phone: "3243-1246" },
  ]

  const administrativo: Person[] = [
    { name: "Cheila Sodre", phone: "3243-1242" },
    { name: "Felipe dos Santos Caprara", phone: "3243-1211" },
    { name: "Juliana Oliveira de Carvalho", phone: "3243-1211" },
    { name: "Juliette Maria Alfonso Frederico", phone: "3243-1242" },
    { name: "Tiago Martins Pinheiro", phone: "3243-1242" },   
  ]

  const cadastro: Person[] = [
    { name: "Orlando Cabral do Nascimento Junior", phone: "3243-1211" },
    
  ]


export default function Contatos() {
  return (
    <div className="p-6 gap-7">
      <Tabela data={chefe} titulo="Chefia de Assessoria" />
      <Tabela data={suporte} titulo="Suporte" />
      <Tabela data={administrativo} titulo="Administrativo" />
      <Tabela data={dev} titulo="Desenvolvimento de Sistemas" />
      <Tabela data={cadastro} titulo="Cadastro de Usuários" />
    </div>
    

    
  );
}
