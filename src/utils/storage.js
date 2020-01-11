export const getStorage = function (name) {
    return window.sessionStorage.getItem(name)
}

export const setStorage = function (name, value) {
     window.sessionStorage.setItem(name, value)
}