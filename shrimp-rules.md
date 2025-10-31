# Development Guidelines for AI Agent

This document provides specific guidelines for the AI Agent when working within the `leetcode_practice` project. It focuses on project-specific rules, coding standards, workflow, and decision-making relevant to problem-solving and progress tracking.

## 1. Project Overview

### 1.1 Purpose

- To solve algorithmic problems from LeetCode, Programmers, and Baekjoon platforms.
- To track problem-solving progress in `README.md`.

### 1.2 Technology Stack

- **TypeScript**: For Programmers and LeetCode problems (primarily).
- **Python**: For Baekjoon and LeetCode problems (primarily).
- **PostgreSQL**: For SQL problems in the `db/` directory.

## 2. Project Architecture

### 2.1 Main Directory Structure

- `/src/programmers/`: Contains TypeScript solutions for Programmers problems, organized by chapter/level.
  - Example: `/src/programmers/추천-100문제/레벨-2/`
- `/src/python/`: Contains Python solutions for Baekjoon problems, organized by tier.
  - Example: `/src/python/silver1/`
- `/db/`: Contains SQL solutions, organized by difficulty.
  - Example: `/db/easy/`, `/db/medium/`, `/db/hard/`
- `/README.md`: The main project documentation and progress tracker.

## 3. Code Standards

### 3.1 Naming Conventions

- **TypeScript**: `camelCase` for variables and functions. `PascalCase` for classes, interfaces, and types.
  - Example (File): `셔틀버스.ts`
- **Python**: `snake_case` for variables and functions. `PascalCase` for classes.
  - Example (File): `1697_숨바꼭질.py` (matching the problem ID and name).
- **Files**: Use `PROBLEM_NAME.ts` or `PROBLEM_NAME.py` format inside their respective directories.

### 3.2 Formatting

- **Rule**: Adhere to the existing code formatting style observed in the respective language files.
- **Do not**: Introduce new formatting conventions. Observe and imitate.

### 3.3 Comment Rules

- **Must**: Include problem source (platform, link) and difficulty as a comment at the top of each solution file.
- **Must**: Add comments for complex logic blocks or non-obvious parts of the code.
- **Do not**: Include conversational comments or comments explaining obvious code.

## 4. Functionality Implementation Standards

### 4.1 Problem Solving Implementation

- **Must**: Implement the solution within a `solution` function (or equivalent class method).
- **Must**: Include example test cases within the solution file.
  - **TypeScript**: Use `console.log(solution(...))` for testing. Remove before final submission if required by the platform.
  - **Python**: Use `if __name__ == "__main__":` block for input processing and testing. Ensure `sys.stdin.readline` is used for input.

### 4.2 SQL Problem Implementation

- **Must**: For `.sql` files, include `CREATE TABLE` and `INSERT` statements at the top of the file to define the schema and sample data.
- **Must**: Place the solution SQL query at the bottom of the file, clearly separated from setup statements.

## 5. Third-party Library Usage Standards

- **TypeScript**: Use standard TypeScript/JavaScript features unless explicitly instructed by the user to use a specific library (e.g., `ts-node` for execution).
- **Python**: Use standard Python library features (e.g., `collections.deque` for BFS, `sys` for input/output). Do not use external packages unless explicitly instructed.
- **Do not**: Introduce new third-party libraries without explicit user consent.

## 6. Workflow Standards

### 6.1 Problem Selection

- **Must**: Prioritize unsolved problems marked with `[ ]` in `README.md`.
- **Must**: When selecting, refer to the user's preference for problem platforms (e.g., Programmers for TS, Baekjoon for PY).

### 6.2 Task Execution

- **Must**: Strictly follow the `implementationGuide` provided by `execute_task`.
- **Must**: For tasks involving coding, you will be provided with file paths. You (the user) are expected to open these files in your IDE (e.g., VS Code) manually.

### 6.3 Verification

- **Must**: Run all provided test cases (examples and edge cases) for both problems.
- **Must**: Confirm that the output matches the expected results for all test cases.

### 6.4 Git Workflow

- **Must**: Use `git add .` to stage all relevant changes (solution files, `README.md`).
- **Must**: Use descriptive commit messages, typically starting with `feat:` or `fix:`, e.g., `feat: Solve 셔틀버스 (TS) and 숨바꼭질 (PY)`.
- **Must**: `git push` only after explicit user confirmation.

## 7. Key File Interaction Standards

### 7.1 `README.md` Updates

- **Must**: After a problem is solved, update `README.md`:
  1. Change `[ ]` to `[x]` next to the solved problem.
  2. Update the corresponding difficulty statistics (e.g., increment '해결' count, decrement '미해결' count).
  3. If multi-file documentation exists (not currently, but for future reference), update all relevant documentation simultaneously.
- **Do not**: Modify sections of `README.md` unrelated to problem status or statistics.

## 8. AI Decision-making Standards

### 8.1 Handling Ambiguity

- **Must**: If a request or instruction is ambiguous, you must seek clarification from the user.
- **Do not**: Make assumptions about user intent.

### 8.2 Information Gathering

- **Must**: Prioritize internal tools (`read_file`, `search_file_content`, `glob`) for gathering information about the codebase.
- **Must**: Use `google_web_search` for obtaining problem descriptions, understanding unfamiliar algorithmic concepts, or researching external technical details.
- **Do not**: Speculate or invent information; all facts must be traceable to a verifiable source.

## 9. Prohibited Actions

- **Never**: Introduce new frameworks or libraries into the project without explicit user consent.
- **Never**: Modify files outside the current project directory (`/Users/choeseonghyeon/WebstormProjects/leetcode_practice/`).
- **Never**: Push changes to the remote Git repository without explicit user confirmation.
- **Never**: Generate complete code without explicit user instruction (pseudocode is acceptable in planning/analysis).