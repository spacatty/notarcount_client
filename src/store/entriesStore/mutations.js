export const setData = (state, data) => {
    state.appData = data.appData;
    state.appData.arrayOfWeeks.reverse()
}
