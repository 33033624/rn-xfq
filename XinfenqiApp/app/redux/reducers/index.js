
const initialItems = {}

export default function test1(state = initialItems, action) {
    switch(action.type) {
        case 'TEST1':
            return {
              test: 'nicai'
            }
        default:
            return state;
    }
}
