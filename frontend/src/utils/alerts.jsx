import Swal from 'sweetalert2'
export const responseSucces = (data) => {
    Swal.fire({
        title: data,
        icon: 'success'
    })
}
export const responseError = (data) => {
    Swal.fire({
        title: data,
        icon: 'error'
    })
}