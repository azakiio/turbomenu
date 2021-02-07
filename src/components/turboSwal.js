import Swal from "sweetalert2"

const turboSwal = Swal.mixin({
  customClass: {
    confirmButton: "turbo-swal__confirm",
    cancelButton: "turbo-swal__cancel",
  },
  buttonsStyling: false,
  showCancelButton: true,
  reverseButtons: true,
})

export default turboSwal;