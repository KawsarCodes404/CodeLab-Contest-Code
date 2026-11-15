function compareVersions(version1, version2) {
    // TODO: Compare version numbers and return -1, 0, or 1
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    const mxL = Math.max(v1.length, v2.length);

    for (let i = 0; i < mxL; i++) {
        if (!v1[i]) v1[i] = 0;
        if (!v2[i]) v2[i] = 0;

        if (v1[i] > v2[i]) return 1;
        else if (v1[i] < v2[i]) return -1;
    }

    return 0;
}