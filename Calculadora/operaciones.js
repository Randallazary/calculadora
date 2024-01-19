const sum = (v1, v2) => v1 + v2;

const res = (v1, v2) => v1 - v2;

const mul = (v1, v2) => v1 * v2;

const div = (v1, v2) => {
    if (v2 == 0)
        return "operación no permitida";
    else
        return v1 / v2;
};

export { sum, res, mul, div };
