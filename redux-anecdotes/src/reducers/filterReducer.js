const filter = ''

const filterReducer = (state = filter, action) => {
  console.log('filter state now: ', state)
  console.log('filter action', action)

  switch (action.type) {
    case 'FILTER':
      return action.data.filter
    default:
      return state
  }
}

export const changeFilter = (newFilter) => {
  return {
    type: 'FILTER',
    data: { filter: newFilter },
  }
}

export default filterReducer
