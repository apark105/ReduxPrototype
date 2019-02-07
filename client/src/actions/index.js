import types from './types';

export function UpdateTime(){
    return {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleDateString()
    }
}