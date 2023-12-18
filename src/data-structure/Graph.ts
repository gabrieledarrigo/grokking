/**
 * Represents a directred graph data structure, using an adjacency list.
 * Each node of the graph is represented by a key in the Map, while the value represents the list of neighbors.
 * @template T The type of the vertices in the graph.
 */
export class Graph<T> {
  private adjancencyList: Map<T, T[]>;

  constructor() {
    this.adjancencyList = new Map();
  }

  /**
   * Adds a vertex to the graph.
   * @param vertex The vertex to be added.
   */
  public addVertex(vertex: T): void {
    if (!this.adjancencyList.has(vertex)) {
      this.adjancencyList.set(vertex, []);
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * @param vertexOne The first vertex of the edge.
   * @param vertexTwo The second vertex of the edge.
   */
  public addEdge(vertexOne: T, vertexTwo: T): void {
    this.adjancencyList.get(vertexOne)?.push(vertexTwo);
    this.adjancencyList.get(vertexTwo)?.push(vertexOne);
  }
}
