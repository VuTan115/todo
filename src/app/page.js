
import TodoApp from './components/TodoApp';

const todoList = [
  {
    id: 1,
    name: 'Implement GraphQL endpoint for user authentication',
    status: 0,
    description: 'Leslie Alexander - March 17, 2023',
  },
  {
    id: 2,
    name: 'Research and draft new benefits plan proposal',
    status: 1,
    description: 'Leslie Alexander - May 5, 2023',
  },
  {
    id: 3,
    name: 'Create onboarding email templates for new hires',
    status: 1,
    description: 'Courtney Henry - May 25, 2023',
  },
  {
    id: 4,
    name: 'Develop iOS app prototype with basic functionalities',
    status: 1,
    description: 'Leonard Krasner - June 7, 2023',
  },
  {
    id: 5,
    name: 'Review and finalize marketing site redesign mockups',
    status: 0,
    description: 'Courtney Henry - June 10, 2023',
  },
  {
    id: 6,
    name: 'Conduct market research for new product launch',
    status: 0,
    description: 'Leslie Alexander - April 15, 2023',
  },
  {
    id: 7,
    name: 'Prepare presentation for quarterly investor meeting',
    status: 2,
    description: 'Leslie Alexander - April 30, 2023',
  },
  {
    id: 8,
    name: 'Update company policies to comply with new regulations',
    status: 2,
    description: 'Courtney Henry - May 15, 2023',
  },
  {
    id: 9,
    name: 'Organize team-building event for department morale',
    status: 1,
    description: 'Leonard Krasner - June 1, 2023',
  },
  {
    id: 10,
    name: 'Review and optimize website SEO performance',
    status: 1,
    description: 'Courtney Henry - June 15, 2023',
  },
];

// call api here to get data from service
export default function Home() {
  return <TodoApp todoList={todoList} />;
}
