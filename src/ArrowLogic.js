const ArrowLeft = (boardState) => {
    const slices = [
        boardState.slice(0, 4),
        boardState.slice(4, 8),
        boardState.slice(8, 12),
        boardState.slice(12)];

    slices.forEach((slice) => {
        // let objects = [];
        let mergeController = 0;
        for(let j = 0; j < 4; j++) {
            // let objectPushed = false;
            // No need to check the first item of the slice. Also zero is not
            // set to merge.
            if (slice[j] === 0 || j === 0) {
                // objects.push({number: slice[j], weight: -1});
                // objectPushed = true;
                continue;
            }
            for (let i = mergeController; i < j; i++) {
                // Found an empty spot.
                if (slice[i] === 0) {
                    // objects.push({number: slice[j], weight: (j - i) === 0 ? -1 : j - i});
                    // objectPushed = true;
                    // Move current 'slice[j]' here.
                    slice[i] = slice[j];
                    // Set 'slice[j]' spot to empty.
                    slice[j] = 0;
                    // The next 'slice[j]' is allowed to merge from
                    // 'slice[mergeController]' and afterwards.
                    mergeController = i;
                    break;
                }
                // Found matching numbers.
                else if (slice[i] === slice[j]) {
                    // objects.push({number: slice[j], weight: j - i});
                    // objectPushed = true;
                    // Multiply number by two.
                    slice[i] <<= 1;
                    // Set 'j's previous spot to empty.
                    slice[j] = 0;
                    // The next 'slice[j]' is allowed to merge from
                    // 'slice[mergeController]' and afterwards.
                    mergeController = i + 1;
                    break;
                }
                // 'slice[j]' could not find a 'slice[i]' to move into. On the
                // next iteration slice[j] is allowed to merge from
                // 'slice[mergeController]' and afterwards.
                mergeController += 1;
            }
        }
    });
    boardState = [...slices[0], ...slices[1], ...slices[2], ...slices[3]];
    return boardState;
}

export default ArrowLeft;