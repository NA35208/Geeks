
import time
import os


class GameOfLife:
    def __init__(self, grid):
        self.grid = grid
        self.rows = len(grid)
        self.cols = len(grid[0])

    def count_neighbors(self, row, col):
        neighbors = 0

        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr == 0 and dc == 0:
                    continue

                r = row + dr
                c = col + dc

                if 0 <= r < self.rows and 0 <= c < self.cols:
                    neighbors += self.grid[r][c]

        return neighbors

    def next_generation(self):
        new_grid = [
            [0 for _ in range(self.cols)]
            for _ in range(self.rows)
        ]

        for row in range(self.rows):
            for col in range(self.cols):
                neighbors = self.count_neighbors(row, col)
                cell = self.grid[row][col]

                if cell == 1:
                    if neighbors in [2, 3]:
                        new_grid[row][col] = 1
                elif neighbors == 3:
                    new_grid[row][col] = 1

        self.grid = new_grid

    def display(self):
        for row in self.grid:
            print(
                "".join("■ " if cell == 1 else ". " for cell in row)
            )

    def is_stable(self):
        next_grid = [
            [0 for _ in range(self.cols)]
            for _ in range(self.rows)
        ]

        for row in range(self.rows):
            for col in range(self.cols):
                neighbors = self.count_neighbors(row, col)
                cell = self.grid[row][col]

                if cell == 1 and neighbors in [2, 3]:
                    next_grid[row][col] = 1
                elif cell == 0 and neighbors == 3:
                    next_grid[row][col] = 1

        return next_grid == self.grid

    def run(self, generations=20, delay=0.5):
        for generation in range(generations + 1):
            os.system("cls" if os.name == "nt" else "clear")

            print(f"Generation: {generation}")
            self.display()

            if self.is_stable():
                print("The grid is stable.")
                break

            if generation < generations:
                time.sleep(delay)
                self.next_generation()


initial_grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

game = GameOfLife(initial_grid)
game.run(generations=10, delay=0.5)
