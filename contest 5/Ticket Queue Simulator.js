function simulateTicketQueue(commands) {
  // TODO
  let queue = [];
  let served = [];

  for (let comm of commands) {
    if (comm.startsWith("join ")) {
      const name = comm.slice(5);

      if (!queue.includes(name)) queue.push(name);
    }
    else if (comm.startsWith("leave ")) {
      const name = comm.slice(6);

      if (queue.includes(name)) {
        queue.splice(queue.indexOf(name), 1);
      }
    }
    else {
      if (queue.length > 0) {
        const per = queue.shift();
        if (!queue.includes(per)) served.push(per);
      }
    }
  }

  return { queue, served };
}
