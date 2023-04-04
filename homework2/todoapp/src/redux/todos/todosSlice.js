import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state,action)=> {
        state.activeFilter=action.payload;
    },
   clearComplate: (state, action) => { 
        state.items =action.payload
   }
  },
});


export const selectTodos= (state) => state.todos.items;
export const { addTodo, toggle, destroy,changeActiveFilter,clearComplate } = todosSlice.actions;
export default todosSlice.reducer;
