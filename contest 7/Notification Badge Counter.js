function updateNotificationCount(initialCount, events) {
    // TODO: Return final notification count after processing events
    for (let event of events) {
        if (event["type"] === "CLEAR") initialCount = 0;
        else {
            if (!event["count"]) {
                if (event["type"] === "ADD") initialCount++;
                else initialCount--;
            }
            else {
                if (event["type"] === "ADD") initialCount += event["count"];
                else initialCount = Math.max(0, initialCount -= event["count"]);
            }
        }
    }

    return initialCount;
}