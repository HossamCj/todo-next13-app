import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import { Fragment } from "react";

function getTodos() {
    return prisma.todo.findMany();
}

export default async function Home() {
    const todos = await getTodos();

    // await prisma.todo.create({ data: { title: "Todo test", complete: false } });

    return (
        <Fragment>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-4xl">قائمة المهام</h1>
                <Link
                    href="/new"
                    className="
                      text-3xl border border-slate-300 text-slate-300 px-2 py-1 
                      rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none
                    "
                >
                    أضف مهمة
                </Link>
            </header>
            <ul className="pl-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </Fragment>
    );
}
