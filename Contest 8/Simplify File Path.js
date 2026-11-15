function simplifyPath(path) {
    // TODO: Implement this function
    let st = [];
    let parts = path.split('/');

    for (let part of parts) {
        if (part === '' || part === '.') continue;

        if (part === '..') st.pop();
        else st.push(part);
    }

    return '/' + st.join('/');
}