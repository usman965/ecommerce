import { REDUCERS_NAME } from "../reducers-names"



export const cartReducer = (state = { totalPrice: 0 }, action) => {
    switch (action.type) {
        case REDUCERS_NAME.cart.addToCart:

            return ({
                ...state,
                totalPrice: state.totalPrice + action.payload?.price,

                [action.payload.id]:
                {
                    ...action.payload,
                    totalPrice: state[action.payload?.id]?.totalPrice > 0 ? (state[action.payload?.id].totalPrice + action.payload?.price) :
                        action.payload?.price,

                    totalQuantity: state[action.payload?.id]?.totalQuantity ? state[action.payload?.id]?.totalQuantity + 1 : 1,
                }
            })

        case REDUCERS_NAME.cart.removeFromCart:
            if (state[action.payload?.id]?.totalQuantity == 1) {
                delete state[action.payload?.id]
                return {
                    ...state, totalPrice: state.totalPrice - action.payload?.price,
                }
            }
            return ({
                ...state,
                totalPrice: state.totalPrice - action.payload?.price,

                [action.payload?.id]:
                {
                    ...action.payload,
                    totalPrice: state[action.payload.id]?.totalPrice - action.payload.price,
                    totalQuantity: state[action.payload.id]?.totalQuantity - 1,
                }
            })

        default: return state

    }

}