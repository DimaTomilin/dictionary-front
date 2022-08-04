import Swal from 'sweetalert2';

export const alert = (errorText: string) =>
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorText,
  });
