const fixDecimalNum = (num) => {
    return num.toFixed(2).split(".")[1] === "00"
        ? num.toFixed(2).split(".")[0]
        : `${num.toFixed(2).split(".")[0]}.${num.toFixed(2).split(".")[1].padEnd(2, "0")}`;
};

export default fixDecimalNum;


                        {/* {discountPrice.toFixed(2).split(".")[1] === "00"
                            ? discountPrice.toFixed(2).split(".")[0]
                            : `${discountPrice.toFixed(2).split(".")[0]}.${discountPrice
                                  .toFixed(2)
                                  .split(".")[1]
                                  .padEnd(2, "0")}`} */}