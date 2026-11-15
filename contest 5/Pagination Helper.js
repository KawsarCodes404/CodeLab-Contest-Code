// function getPageMetadata(totalItems, pageSize, currentPage) {
//   // TODO: implement
//   if (!totalItems) return {"endItem":0,"hasNext":false,"hasPrev":false,"startItem":0,"totalPages":0};
//
//   const totP = Math.ceil(totalItems / pageSize);
//
//   if (currentPage === totP) {
//     return {"endItem":,"hasNext":false,"hasPrev":false,"startItem":0,"totalPages":0};
//   }
// }

function getPageMetadata(totalItems, pageSize, currentPage) {
  // TODO: implement
  if (!totalItems) return { "endItem": 0, "hasNext": false, "hasPrev": false, "startItem": 0, "totalPages": 0 };

  const totP = Math.ceil(totalItems / pageSize);
  const strtI = ((currentPage - 1) * pageSize + 1);

  if (currentPage === totP) {
    return { "endItem": totalItems, "hasNext": false, "hasPrev": totP > 1 ? true : false, "startItem": strtI, "totalPages": totP };
  }
  else {
    if (currentPage === 1) {
      return { "endItem": pageSize, "hasNext": true, "hasPrev": false, "startItem": strtI, "totalPages": totP };
    }
    else {
      return { "endItem": strtI + pageSize - 1, "hasNext": true, "hasPrev": true, "startItem": strtI, "totalPages": totP };
    }
  }
}
