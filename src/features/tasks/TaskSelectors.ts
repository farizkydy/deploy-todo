import { selector } from 'recoil'
import { tasksState, taskFilterState } from './TaskAtoms'
import type { Task } from '../../types'
import { SelectorKeys } from '../../constants/recoilKeys'
import { TASK_FILTER } from '../../constants/app'

export const uncompletedTasksSelector = selector<Task[]>({
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const completedTasksSelector = selector<Task[]>({
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})

export const notStartedTasksSelector = selector<Task[]>({
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3
    })
  },
})

export const filteredTasksSelector = selector<Task[]>({
  key: SelectorKeys.FILTERED_TASKS,
  get: ({ get }) => {
    const filter: string = get(taskFilterState)
    const tasks = get(tasksState)
    switch (filter) {
      case TASK_FILTER.ALL:
        return tasks
      case TASK_FILTER.COMPLETED:
        return completedTasksSelector
      case TASK_FILTER.UNCOMPLETED:
        return uncompletedTasksSelector
      default:
        return tasks
    }
  },
})
