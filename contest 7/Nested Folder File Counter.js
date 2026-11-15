function countFilesInFolder(structure) {
    // TODO: Implement this function
    let cnt = 0;

    for (let item of structure) {
        if (item.type === "file") cnt++;
        else cnt += countFilesInFolder(item.children);
    }

    return cnt;
}