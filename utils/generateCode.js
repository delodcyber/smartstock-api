const generateCode = async (model, fieldName, prefix) => {

    const lastRecord = await model
        .findOne()
        .sort({ [fieldName]: -1 });

    if (!lastRecord) {
        return `${prefix}-000001`;
    }

    const lastCode = lastRecord[fieldName];

    const lastNumber = Number(
        lastCode.split("-")[1]
    );

    const nextNumber = lastNumber + 1;

    const formattedNumber = String(nextNumber)
        .padStart(6, "0");

    return `${prefix}-${formattedNumber}`;
};

export { generateCode };