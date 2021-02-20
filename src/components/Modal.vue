<template>
  <SlideYUpTransition :duration="animationDuration">
    <div class="modal fade"
         @click.self="closeModal"
         :class="[{'show d-block': show}, {'d-none': !show}, {'modal-mini': type === 'mini'}]"
         v-show="show"
         tabindex="-1"
         role="dialog"
         :aria-hidden="!show">

      <div class="modal-dialog modal-dialog-centered"
           :class="[{'modal-notice': type === 'notice'}, modalClasses]">
        <div class="modal-content" :class="[gradient ? `bg-gradient-${gradient}` : '',modalContentClasses]">

          <div class="modal-header" :class="[headerClasses]">
            <slot name="header"></slot>
            <slot name="close-button">
              <h5 class="font-weight-900">Create New Delivery</h5>
              <button type="button"
                      class="close font-weight-900"
                      @click="closeModal"
                      data-dismiss="modal"
                      aria-label="Close">
                <span >×</span>
              </button>
            </slot>
          </div>

          <div class="modal-body" :class="bodyClasses">
            <form role="form">
              <base-input
                  class="mb-3"
                  placeholder="Customer Name*"
                  v-model="customerName"
                  addon-left-icon="ni ni-single-02">
              </base-input>
              <base-input
                  class="mb-3"
                  placeholder="Product Name*"
                  v-model="productName"
                  addon-left-icon="ni">
              </base-input>
              <base-input
                  class="mb-3"
                  placeholder="Delivery Address*"
                  v-model="deliveryAddress"
                  addon-left-icon="ni ni-delivery-fast">
              </base-input>
              <base-input
                  type="number"
                  v-model="customerTel"
                  @keypress="isNumber"
                  placeholder="Telephone*"
                  addon-left-icon="ni ni-tablet-button">
              </base-input>
              <div class="text-center">
                <base-button type="primary" class="my-4" @click="SendRequest">Create Delivery</base-button>
              </div>
            </form>
          </div>

          <div class="modal-footer" :class="footerClasses" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>

    </div>
  </SlideYUpTransition>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";
import {validations} from "@/mixins/validations";
import {APIService} from "@/BackendApiService";

export default {
  name: "modal",
  components: {
    SlideYUpTransition
  },
  mixins: [validations],
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        let acceptedValues = ["", "notice", "mini"];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: "Modal dialog css classes"
    },
    modalContentClasses: {
      type: [Object, String],
      description: "Modal dialog content css classes"
    },
    gradient: {
      type: String,
      description: "Modal gradient type (danger, primary etc)"
    },
    headerClasses: {
      type: [Object, String],
      description: "Modal Header css classes"
    },
    bodyClasses: {
      type: [Object, String],
      description: "Modal Body css classes"
    },
    footerClasses: {
      type: [Object, String],
      description: "Modal Footer css classes"
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: "Modal transition duration"
    }
  },
  data() {
    return {
      customerName: "",
      productName: "",
      deliveryAddress: "",
      customerTel: ""
    }
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    closeModalWithUpdate() {
      this.$emit("closeModalWithUpdate");
    },
    SendRequest (e) {
      e.preventDefault()
      const apiServ = new APIService()
      if (localStorage.getItem('session_id') && localStorage.getItem('logged_in_user_id')) {
        const data = {
          params: {
            data: {
              customer: localStorage.getItem('logged_in_user_id'),
              delivery_request_lines: [
                [0, 0, {
                  product_name: this.productName,
                  delivery_address: this.deliveryAddress,
                  item_owner: this.customerName,
                  item_owner_phone: this.customerTel,
                }],
              ],
            },
          },
        }
        apiServ.createDeliveryRequest(data, localStorage.getItem('session_id')).then(res => {
          console.log(res.data)
          this.delivery_address = ''
          this.product_name = ''
          this.closeModalWithUpdate()
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log('login please')
        this.$router.push({ name: 'login' })
      }
      this.dialog = false
    },
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;
      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    }
  }
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
