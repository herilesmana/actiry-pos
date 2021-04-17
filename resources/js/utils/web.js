import axios from 'axios'

const web = () => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

    const _web = axios.create({
        baseURL: '/'
    })

    return _web
}

export default web();