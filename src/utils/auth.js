/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 15:23:03
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\utils\auth.js
 * @Description: 常用方法配置
 * 
 */
import Cookies from 'js-cookie'
const TokenKey = 'Authorization'

/**
 * 设置setLocalStorage
 * @param {*} key 
 * @param {*} value 
 */
export function setLocalStorage (key, value) {
    window.localStorage.setItem(key, window.JSON.stringify(value))
}

/**
 * 获取getLocalStorage
 * @param {*} key 
 * @returns 
 */
export function getLocalStorage (key) {
    return window.JSON.parse(window.localStorage.getItem(key) || '[]')
}

/**
 * 设置setSessionStorage
 * @param {*} key 
 * @param {*} value 
 */
export function setSessionStorage (key, value) {
    window.sessionStorage.setItem(key, window.JSON.stringify(value))
}

/**
 * 获取getSessionStorage
 * @param {*} key 
 * @returns 
 */
export function getSessionStorage (key) {
    return window.JSON.parse(window.sessionStorage.getItem(key) || '[]')
}

/**
 * 获取getToken
 * @returns 
 */
export function getToken () {
    return Cookies.get(TokenKey)
}

/**
 * 设置setToken
 * @param {*} token 
 * @returns 
 */
export function setToken (token) {
    return Cookies.set(TokenKey, token)
}

/**
 * 移除removeToken
 * @returns 
 */
export function removeToken () {
    return Cookies.remove(TokenKey)
}
