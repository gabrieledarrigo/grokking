import { Graph } from '../../src/data-structure/Graph';
import { breathFirstSearch } from './breadthFirstSearch';

describe('breathFirstSearch', () => {
  it('should visit all vertices of the given graph in breadth-first order', () => {
    const graph = new Graph<number>();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 6);
    graph.addEdge(3, 7);

    const startVertex = 1;

    const visited = breathFirstSearch(graph, startVertex);

    expect(Array.from(visited)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
