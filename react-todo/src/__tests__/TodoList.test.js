import React from "react";
import { render, screen, fireEvent,} from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import { test, expect } from "vitest";

const sum = (a, b) => a + b;

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});


test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a todo"), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText("Delete")[0]);
  expect(screen.queryByText("Learn React")).toBeNull();
});
