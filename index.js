
function findAdjacent(node, vertices, edges) {
  // 1. is there an edge that connects 'node' to another node?
  const nodeEdges = edges.filter(arr => arr.includes(node));
  // from each nodeEdge array, select only those vertices that are not identical with the node whose adjacent nodes we're searching
  let adjacentVertices = nodeEdges.map(edge => edge.find(vertex => vertex != node));
  // adjacentVertices only contains the names of the vertice; now select the objects from the vertices array that match the name and that have not yet been assigned a distance value
  return vertices.filter(vertex => adjacentVertices.includes(vertex.name) && vertex.distance === null)
}

function markDistanceAndPredecessor(startingNode, adjacentNodes) {
  for (let i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].distance += 1;
    adjacentNodes[i].predecessor = startingNode
  }
  return adjacentNodes;
}


function bfs(startingNode, vertices, edges) {

}
