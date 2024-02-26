
import TodoApp from './components/TodoApp';


const getTodoList = async () => {
  return fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

// call api here to get data from service
export default async function Home() {
  const todoList = await getTodoList();

  return <TodoApp todoList={todoList} />;
}
