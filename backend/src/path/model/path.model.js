// Find the path.
export const getPath = (grid, start, end) => {
    // Check for visited Array.
    function isVisited(x, y, grid, visited) {
        return (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && !visited[x][y] && grid[x][y] === 0);
    }

    // Using DFS traversal Finding the right path.
    function dfs (x, y, grid, visited, pathLength, minLength) {
        // x, yth position meet the end point.
        if (x === grid.length - 1 && y == grid[0].length - 1 ) {
            minLength[0] = Math.min(minLength[0], pathLength);
            return;
        }

        // Default Details
        visited[x][y] = true;

        // Possible durations
        const directions = [[0,1], [1, 0], [0, -1], [-1, 0]];

        // Iterating to each element to check the possible way.
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = x + dy;
        
            // If the node visited again move to next node to finilize the path.
            if(isVisited(newX, newY, grid, visited)) {
                dfs(newX, newY, grid, visited, pathLength + 1, minLength);
            }
        }

        visited[x][y] = false;
    }

    // Edge Cases.
    if(grid.length == 0|| grid[0] == 0 || grid[0][0] == 1 || grid[grid.length -1][grid[0].length - 1] == 1) {
        return -1;
    }

    // Finding the lengths
    const n = grid.length;
    const m = grid[0].length;

    // Checking the finilized value.
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    let minLength = [Infinity];

    // DFS with start, end, grid, visited, minLength values.
    dfs(start, end, grid, visited, 0, minLength);

    return minLength[0] === Infinity ? -1 : minLength[0];
}