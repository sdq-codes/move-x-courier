<template>
  <div>
<!--    <div id='loader'>-->
<!--      <div class="spinner"></div>-->
<!--    </div>-->

    <!-- @App Content -->
    <!-- =================================================== -->
    <div>
      <!-- #Left Sidebar ==================== -->
<!--      <div class="sidebar">
        <div class="sidebar-inner">
          &lt;!&ndash; ### $Sidebar Header ### &ndash;&gt;
          <div class="sidebar-logo">
            <div class="peers ai-c fxw-nw">
              <div class="peer peer-greed">
                <a class="sidebar-link td-n" href="index.html">
                  <div class="peers ai-c fxw-nw">
                    <div class="peer">
                      <div class="logo">
                        <img src="assets/static/images/logo.png" alt="">
                      </div>
                    </div>
                    <div class="peer peer-greed">
                      <h5 class="lh-1 mB-0 logo-text">Adminator</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="peer">
                <div class="mobile-toggle sidebar-toggle">
                  <a href="" class="td-n">
                    <i class="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; ### $Sidebar Menu ### &ndash;&gt;
          <ul class="sidebar-menu scrollable pos-r">
            <li class="nav-item mT-30 actived">
              <a class="sidebar-link" href="index.html">
                <span class="icon-holder">
                  <i class="c-blue-500 ti-home"></i>
                </span>
                <span class="title">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="email.html">
                <span class="icon-holder">
                  <i class="c-brown-500 ti-email"></i>
                </span>
                <span class="title">Email</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="compose.html">
                <span class="icon-holder">
                  <i class="c-blue-500 ti-share"></i>
                </span>
                <span class="title">Compose</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="calendar.html">
                <span class="icon-holder">
                  <i class="c-deep-orange-500 ti-calendar"></i>
                </span>
                <span class="title">Calendar</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="chat.html">
                <span class="icon-holder">
                  <i class="c-deep-purple-500 ti-comment-alt"></i>
                </span>
                <span class="title">Chat</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="charts.html">
                <span class="icon-holder">
                  <i class="c-indigo-500 ti-bar-chart"></i>
                </span>
                <span class="title">Charts</span>
              </a>
            </li>
            <li class="nav-item">
              <a class='sidebar-link' href="forms.html">
                <span class="icon-holder">
                  <i class="c-light-blue-500 ti-pencil"></i>
                </span>
                <span class="title">Forms</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="sidebar-link" href="ui.html">
                <span class="icon-holder">
                    <i class="c-pink-500 ti-palette"></i>
                  </span>
                <span class="title">UI Elements</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="icon-holder">
                  <i class="c-orange-500 ti-layout-list-thumb"></i>
                </span>
                <span class="title">Tables</span>
                <span class="arrow">
                  <i class="ti-angle-right"></i>
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class='sidebar-link' href="basic-table.html">Basic Table</a>
                </li>
                <li>
                  <a class='sidebar-link' href="datatable.html">Data Table</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="icon-holder">
                    <i class="c-purple-500 ti-map"></i>
                  </span>
                <span class="title">Maps</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                  </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="google-maps.html">Google Map</a>
                </li>
                <li>
                  <a href="vector-maps.html">Vector Map</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="icon-holder">
                    <i class="c-red-500 ti-files"></i>
                  </span>
                <span class="title">Pages</span>
                <span class="arrow">
                    <i class="ti-angle-right"></i>
                  </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class='sidebar-link' href="blank.html">Blank</a>
                </li>
                <li>
                  <a class='sidebar-link' href="404.html">404</a>
                </li>
                <li>
                  <a class='sidebar-link' href="500.html">500</a>
                </li>
                <li>
                  <a class='sidebar-link' href="signin.html">Sign In</a>
                </li>
                <li>
                  <a class='sidebar-link' href="signup.html">Sign Up</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="icon-holder">
                  <i class="c-teal-500 ti-view-list-alt"></i>
                </span>
                <span class="title">Multiple Levels</span>
                <span class="arrow">
                  <i class="ti-angle-right"></i>
                </span>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item dropdown">
                  <a href="javascript:void(0);">
                    <span>Menu Item</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a href="javascript:void(0);">
                    <span>Menu Item</span>
                    <span class="arrow">
                      <i class="ti-angle-right"></i>
                    </span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="javascript:void(0);">Menu Item</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Menu Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>-->

      <!-- #Main ============================ -->
      <modal :show="showModal" :show-close="showClose" @closeModalWithUpdate="updateRequest" @close="closeModal" />
      <div class="page-container">
        <!-- ### $Topbar ### -->
        <div class="header navbar">
          <div class="header-container">
            <ul class="nav-left">
              <li>
                <a id='sidebar-toggle' class="sidebar-toggle" href="#">
                  moveX
                </a>
              </li>
              <li class="search-input">
                <input class="form-control" type="text" placeholder="Search...">
              </li>
            </ul>
            <ul class="nav-right">
              <li class="dropdown">
                <a href="#" @click="logout" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                  <div class="">
                    <img width="32" src="../assets/exit.png" alt="">
                  </div>
                  <div class="peer">
                    <span class="fsz-sm c-grey-900">Logout</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- ### $App Screen Content ### -->
        <main class='main-content bgc-grey-100'>
          <div id='mainContent'>
            <div class="row gap-20 masonry pos-r">
              <div class="masonry-sizer col-md-6"></div>
              <div class="masonry-item  w-100">
                <div class="row gap-20">
                  <!-- #Toatl Visits ==================== -->
                  <div class='col-md-3'>
                    <div class="layers bd bgc-white p-20">
                      <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Pending Deliveries</h6>
                      </div>
                      <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                          <div class="peer peer-greed">
                            <span id="sparklinedash"></span>
                          </div>
                          <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{{pending}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- #Total Page Views ==================== -->
                  <div class='col-md-3'>
                    <div class="layers bd bgc-white p-20">
                      <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Assigned Deliveries</h6>
                      </div>
                      <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                          <div class="peer peer-greed">
                            <span id="sparklinedash2"></span>
                          </div>
                          <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">{{assigned}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- #Unique Visitors ==================== -->
                  <div class='col-md-3'>
                    <div class="layers bd bgc-white p-20">
                      <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Delivered Requests</h6>
                      </div>
                      <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                          <div class="peer peer-greed">
                            <span id="sparklinedash3"></span>
                          </div>
                          <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">{{ delivered }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- #Bounce Rate ==================== -->
                  <div class='col-md-3'>
                    <div class="layers bd bgc-white p-20">
                      <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Canceled Requests
                        </h6>
                      </div>
                      <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                          <div class="peer peer-greed">
                            <span id="sparklinedash4"></span>
                          </div>
                          <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">{{ cancel }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonry-item col-md-12">
                <!-- #Sales Report ==================== -->
                <div class="bd bgc-white">
                  <div class="layers">
                    <div class="layer w-100 p-20">
                      <h6 class="lh-1">Deliveries</h6>
                    </div>
                    <div class="layer w-100">
                      <div class="table-responsive p-20">
                        <table class="table">
                          <thead>
                          <tr>
                            <th class=" bdwT-0">Delivery Request No.</th>
                            <th class=" bdwT-0">Expected Delivery Date</th>
                            <th class=" bdwT-0">Total Request Charge</th>
                            <th class=" bdwT-0">Status</th>
                            <th class=" bdwT-0">Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="item in items"> 
                            <td class="fw-600">{{ item.request_no }}</td>
                            <td class="fw-600">{{ item.expected_delivery_date }}</td>
                            <td class="fw-600">&#8358;{{ item.delivery_price }}</td>
                            <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">{{ item.status }}</span> </td>
                            <td><button class="btn btn-outline-primary p-10" @click="SendRequest(item.id)" v-if="item.state == 'assigned'">Delivered</button> </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- ### $App Screen Footer ### -->
        <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
          <span>Copyright © 2021 <a href="#" title="Colorlib">moveX</a>. All rights reserved.</span>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import {APIService} from "@/BackendApiService";
import moment from 'moment'
import Modal from "@/components/Modal";

window.addEventListener('load', function load() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.classList.add('fadeOut');
  }, 300);
});
export default {
  name: "Dashboard",
  components: {Modal},
  data () {
    return {
      dialog: false,
      delivery_address: '',
      product_name: '',
      item_owner: '',
      item_owner_phone: '',
      pending: 0,
      assigned: 0,
      delivered: 0,
      cancel: 0,
      headers: [
        {
          sortable: true,
          text: 'Delivery Request No.',
          value: 'request_no',
        },
        {
          sortable: true,
          text: 'Expected Delivery Date',
          value: 'expected_delivery_date',
        },
        {
          sortable: false,
          text: 'Total Request Charge',
          value: 'delivery_price',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Status',
          value: 'status',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Actions',
          value: '',
          align: 'right',
        },
      ],
      items: [],
      user_id: null,
      showModal: false,
      showClose: true
    }
  },
  created() {
    const userId = localStorage.getItem('logged_in_user_id')
    let sessionId = localStorage.getItem('session_id')
    document.cookie = `session_id=${sessionId}`
    if (!userId) {
      this.$router.push({ name: 'login' })
    } else {
      this.user_id = userId
      this.updateRequest()
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    },
    updateRequest () {
      const apiServ = new APIService()
      let sessionId = localStorage.getItem('session_id')
      this.pending = 0
      this.cancel = 0
      this.assigned = 0
      this.delivered = 0
      apiServ.fetchDeliveryRequests(this.user_id, sessionId).then(req => {
        let expectedDeliveryDate = ''
        this.items = req.data.result
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].state === 'new') {
            this.pending = this.pending + 1
          } else if (this.items[i].state === 'cancel') {
            this.cancel = this.cancel + 1
          } else if (this.items[i].state === 'assigned') {
            this.assigned = this.assigned + 1
          } else if (this.items[i].state === 'delivered') {
            this.delivered = this.delivered + 1
          }

          if (!req.data.result[i].date_to_be_due) {
            expectedDeliveryDate = 'NA'
          } else {
            expectedDeliveryDate = moment(req.data.result[i].date_to_be_due).format('MMMM Do YYYY')
          }
          console.log(this.pending);
          this.items[i]['request_no'] = req.data.result[i].name
          this.items[i]['expected_delivery_date'] = expectedDeliveryDate
          this.items[i]['delivery_price'] = req.data.result[i].delivery_price
          this.items[i]['status'] = req.data.result[i].state
          this.showModal = false
        }
      }).catch(err => {
        console.log(err)
      })
    },
    SendRequest (id) {
      const apiServ = new APIService()
      let sessionId = localStorage.getItem('session_id')
      apiServ.acceptDeliveryRequests(id, sessionId)
      .then(() => {
        this.updateRequest();
      })
    },
    closeModal() {
      this.showModal = !this.showModal;
    },
    logout() {
      localStorage.removeItem('logged_in_user_id')
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/index.scss";

#loader {
  transition: all 0.3s ease-in-out;
  opacity: 1;
  visibility: visible;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #fff;
  z-index: 90000;
}

#loader.fadeOut {
  opacity: 0;
  visibility: hidden;
}

.spinner {
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
}

.header {
 width: 100%;
}
</style>