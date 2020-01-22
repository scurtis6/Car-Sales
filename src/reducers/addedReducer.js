export const initialState = {
    car: [
        { price: 26395, name: "2019 Ford Mustang", image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg" }
    ]
};

export const addedReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        default:
            return state;
    }
};