// itRostik iFellow
// https://codesandbox.io/p/sandbox/react-1-yv9rix?file=%2Fsc%2FApp.tsx%3A25%2C1

import { useCallback, useEffect, useState } from "react";
import "./styles.css";

// Написать TODO приложение. Два списка. Один список с не
// Второй список с выполнеными задачами
// Напротив каждой задачи кнопка переключатель Готово/В ра
// При нажатии на кнопку статус задачи isDone меняется на

interface Task {
    id: number;
    isDone: boolean;
    taskName: string;
}

const initialTaskList: Task[] = [
    { id: 1, taskName: "Задача 1", isDone: false },
    { id: 2, taskName: "Задача 2", isDone: false },
    { id: 3, taskName: "Задача 3", isDone: false },
    { id: 4, taskName: "Задача 4", isDone: false },
    { id: 5, taskName: "Задача 5", isDone: false },
    { id: 6, taskName: "Задача 6", isDone: false },
]

export default function App() {
    return <div>Can you write to do app</div>;
}