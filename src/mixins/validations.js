export const validations = {
  methods: {
    isNumber (evt) {
      const charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      }
    },
    isGraterThan (value, min, name) {
      const endValue = value.length >= min
      if (!endValue) {
        this.$swal(
            `${name} Error!`,
            `${name} must be at least ${min} character long`,
            'error'
        )
      }
      return endValue
    },
    isSize (value, size, name) {
      const endValue = value.length === size
      if (!endValue) {
        this.$swal(
            `${name} Error!`,
            `${name} must be ${size} character long`,
            'error'
        )
      }
      return endValue
    },
    isCorrectTelephone: function (value) {
      const countryCode = value.substring(0, 3) === '234'
      alert(value.substring(0, 3))
      alert(value.substring(0, 3) === '234')
      if (!countryCode) {
        this.$swal(
            `Telephone Number Error!`,
            `Telephone is incorrect.`,
            'error'
        )
      }
      return countryCode
    },
    isEmail (value) {
      this.isNotEmpty(value)
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      if (!emailRegex.test(value)) {
        this.$swal(
            'Email Error!',
            'Email entered has wrong format',
            'error'
        )
      }
      return emailRegex.test(value)
    },
    isNotEmpty (value, name) {
      const inItEmpty = value.length >= 1
      if (!inItEmpty) {
        this.$swal(
            `${name} Error!`,
            `${name} can't be empty`,
            'error'
        )
      }
      return inItEmpty
    },
  },
}
