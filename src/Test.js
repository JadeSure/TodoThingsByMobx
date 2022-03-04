import React from "react";
import counterStore from './store/todosListStore'

export default function Test() {
  return <div>test: {counterStore.count}</div>;
}
