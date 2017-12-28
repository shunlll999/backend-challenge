export const createActionSet = (actionName) => (
  {
    FETCHING: `${actionName}_FETCHING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  }
)