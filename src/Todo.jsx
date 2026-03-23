export default function Todo({task, isDone}) {
    return(
        <ul>
            <li>Task: {task} {isDone}</li>
        </ul>
    )
}