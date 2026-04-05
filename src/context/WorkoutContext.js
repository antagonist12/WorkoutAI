import React, { createContext, useContext, useReducer } from 'react';

// Types
const ACTIONS = {
  SET_WORKOUT_PLAN: 'SET_WORKOUT_PLAN',
  CLEAR_WORKOUT_PLAN: 'CLEAR_WORKOUT_PLAN',
};

// Initial State
const initialState = {
  workoutPlan: null,
};

// Reducer
function workoutReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_WORKOUT_PLAN:
      return { ...state, workoutPlan: action.payload };
    case ACTIONS.CLEAR_WORKOUT_PLAN:
      return { ...state, workoutPlan: null };
    default:
      return state;
  }
}

// Context
const WorkoutContext = createContext(null);

// Provider
export function WorkoutProvider({ children }) {
  const [state, dispatch] = useReducer(workoutReducer, initialState);

  const setWorkoutPlan = (plan) => dispatch({ type: ACTIONS.SET_WORKOUT_PLAN, payload: plan });
  const clearWorkoutPlan = () => dispatch({ type: ACTIONS.CLEAR_WORKOUT_PLAN });

  return (
    <WorkoutContext.Provider value={{ ...state, setWorkoutPlan, clearWorkoutPlan }}>
      {children}
    </WorkoutContext.Provider>
  );
}

// Custom Hook
export function useWorkout() {
  return useContext(WorkoutContext);
}