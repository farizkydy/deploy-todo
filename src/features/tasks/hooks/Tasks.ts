import { useRecoilState } from 'recoil'
import { tasksState } from '../TaskAtoms'
import type { Task } from '../../../types'
import { TASK_PROGRESS_ID } from '../../../constants/app'

type useTaskActionType = {
  completeTask: (taskId: number) => void
  moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void
}

export const useTasksAction = (): useTaskActionType => {
  const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)

  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId
        ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED }
        : task,
    )
    setTasks(updatedTasks)
  }

  const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
    const movedTask: Task | undefined = tasks.find(
      (task): boolean => task.id === taskId,
    )
    if (!movedTask) return

    const isOutOfBounds: boolean =
      movedTask.progressOrder + directionNumber < 1 ||
      movedTask.progressOrder + directionNumber > 4

    if (isOutOfBounds) return

    const updatedOrder: number = movedTask.progressOrder + directionNumber

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, progressOrder: updatedOrder } : task,
    )

    setTasks(updatedTasks)
  }

  return {
    completeTask,
    moveTaskCard,
  }
}
