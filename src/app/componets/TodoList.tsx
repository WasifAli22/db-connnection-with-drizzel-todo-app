import React from 'react'
import { Todo } from '@/lib/drizzel';
const getData = async () => {
    try {
        const res = await fetch("/api/todo");
        if (!res.ok) {
            throw new Error("Something wrong");
        }
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);

    }

}
const TodoList = async () => {
    const data: Todo[] = await getData()
    return (
        <>
            {
                data.map((item) => {
                    <div className='bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5"'>
                        {/* circle */}
                        <div className="h-3 w-3 bg-secondary rounded-full"></div>
                        {/* tasktitle */}
                        <p className="text-lg font-medium">Task 1</p>
                    </div>
                })

            }
        </>
    )
}

export default TodoList