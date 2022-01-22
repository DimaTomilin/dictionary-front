import Swal from 'sweetalert2';

export const alert = (errorText) =>
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorText,
  });
