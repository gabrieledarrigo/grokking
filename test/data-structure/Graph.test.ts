import { Graph } from '../../src/data-structure/Graph';

describe('Graph', () => {
  let graph: Graph<string>;

  beforeEach(() => {
    graph = new Graph<string>();
  });

  it('should add a vertex to the graph', () => {
    graph.addVertex('A');

    expect(graph['adjancencyList'].get('A')).toEqual([]);
  });

  it('should add an edge between two vertices in the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph['adjancencyList'].get('A')).toEqual(['B']);
    expect(graph['adjancencyList'].get('B')).toEqual(['A']);
  });
});
