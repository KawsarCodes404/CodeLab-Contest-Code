function selectBestDiscount(price, offers) {
    // TODO: Implement logic to return the offer yielding the lowest price
    let disP = price;
    let res = null;

    for (let offer of offers) {
        if (price >= offer.minPrice) {
            let newP;

            if (offer.type === "flat") newP = Math.max(0, price - offer.value);
            else newP = Math.max(0, price - (price * offer.value) / 100);

            if (newP < disP) {
                disP = newP;
                res = offer;
            }
        }
    }

    return res;
}