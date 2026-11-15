function countConnectedFriends(friendships, startPerson) {
  // TODO
  let graph = new Map();
  let visited = new Set();

  for (let [p1, p2] of friendships) {
    if (!graph.has(p1)) graph.set(p1, []);
    if (!graph.has(p2)) graph.set(p2, []);

    graph.get(p1).push(p2);
    graph.get(p2).push(p1);
  }

  function dfs(person) {
    if (visited.has(person)) return;

    visited.add(person);

    for (let per of graph.get(person) || []) {
      dfs(per);
    }
  }

  dfs(startPerson);

  return visited.size;
}