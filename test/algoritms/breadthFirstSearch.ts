import { Graph } from '../../src/data-structure/Graph';

/* 

Input: A graph G and a starting vertex root of G

Output: Goal state. The parent links trace the shortest path back to root[8]

1  procedure BFS(G, root) is
2      let Q be a queue
3      label root as explored
4      Q.enqueue(root)
5      while Q is not empty do
6          v := Q.dequeue()
7          if v is the goal then
8              return v
9          for all edges from v to w in G.adjacentEdges(v) do
10              if w is not labeled as explored then
11                  label w as explored
12                  w.parent := v
13                  Q.enqueue(w)
 */

export function breathFirstSearch<T>(graph: Graph<T>, start: T): Set<T> {
  const queue: T[] = [start];
  const visited: Set<T> = new Set();

  while (queue.length > 0) {
    let vertex = queue.shift();

    if (vertex) {
      visited.add(vertex);

      const neighbors = graph.getAdjacencyList().get(vertex);

      if (neighbors) {
        queue.push(...neighbors.filter((neighbor) => !visited.has(neighbor)));
      }
    }
  }

  return visited;
}
