<template>
	<section>
		  <header class="header header-horizontal">
            <div class="container">
                <nav class="uk-navbar">
                    <!-- left Side Content -->
                    <div class="uk-navbar-left logos">
                        <!-- logo -->
                        <a href="home.html" class="logo">
                            <img src="./../images/logo.png" alt="logo">
                        </a>
                    </div>
                        <span>SMAN 5 BANDUNG</span>
                    <!--  Right Side Content   -->
                    <div class="uk-navbar-right">
                        <div class="header-widget">
                            <!-- User icons close mobile-->
                            <span class="icon-feather-x icon-small uk-hidden@s"uk-toggle="target: .header-widget ; cls: is-active"> </span>
                            <a href="#" class="header-widget-icon"
                                uk-tooltip="title: My Courses ; pos: bottom ;offset:21">
                            </a>
                            <!-- courses dropdown List -->
                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                                class="dropdown-notifications my-courses-dropdown">
                            </div>
                            <!-- notificiation icon  -->
                            <a href="#" class="header-widget-icon" uk-tooltip="title: Notificiation ; pos: bottom ;offset:21">
                                <i class="uil-bell"></i>
                                <span>1</span>
                            </a>
                            <!-- notificiation dropdown -->
                            <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small"
                                class="dropdown-notifications">
                                <!-- notivication header -->
                                <div class="dropdown-notifications-headline">
                                    <h4>Pemberitahuan</h4>
                                    <a href="#">
                                        <i class="icon-feather-settings"
                                            uk-tooltip="title: Notifications settings ; pos: left"></i>
                                    </a>
                                </div>
                                <!-- notification contents -->
                                <div class="dropdown-notifications-content data-simplebar">
                                    <ul>
                                        <li class="notifications-not-read">
                                            <a href="#">
                                                <span class="notification-icon btn btn-soft-danger disabled">
                                                    <i class="icon-feather-share-2"></i></span>
                                                <span class="notification-text">
                                                    <strong>Rian</strong> Tugas Bahasa Indonesa
                                                    <span class="text-primary">Tenggat 20/12/2020 </span>
                                                    <br> <span class="time-ago"> 2 Jam yang lalu </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Diskusi  -->
                            <a href="#" class="header-widget-icon" uk-tooltip="title: Message ; pos: bottom ;offset:21">
                                <i class="uil-envelope-alt"></i>
                                <span>1</span>
                            </a>
                            <!-- Message  notificiation dropdown -->
                            <div uk-dropdown=" pos: top-right;mode:click" class="dropdown-notifications">
                                <!-- notivication header -->
                                <div class="dropdown-notifications-headline">
                                    <h4>Diskusi</h4>
                                    <a href="#">
                                        <i class="icon-feather-settings"uk-tooltip="title: Message settings ; pos: left"></i>
                                    </a>
                                </div>
                                <!-- notification contents -->
                                <div class="dropdown-notifications-content data-simplebar">
                                    <!-- notiviation list -->
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span class="notification-avatar">
                                                    <img src="./../images/avatars/avatar-4.jpg" alt="">
                                                </span>
                                                <div class="notification-text notification-msg-text">
                                                    <strong>Tia</strong>
                                                    <p> apakah hari ini ada Tugas
                                                    </p>
                                                    <span class="time-ago"> Kemarin </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- profile-icon-->
                            <a href="#" class="header-widget-icon profile-icon">
                                <img src="./../images/avatars/avatar-2.jpg" alt="" class="header-profile-icon">
                            </a>
                            <div uk-dropdown="pos: top-right ;mode:click" class="dropdown-notifications small">
                                <!-- User Name / Avatar -->
                                <a href="profile-1.html">

                                    <div class="dropdown-user-details">
                                        <div class="dropdown-user-avatar">
                                            <img src="./../images/avatars/avatar-2.jpg" alt="">
                                        </div>
                                        <div class="dropdown-user-name">
                                            Alia<span>Siswa</span>
                                        </div>
                                    </div>
                                </a>
                                <!-- User menu -->
                                <ul class="dropdown-user-menu">
                                    <li><a href="#" @click.prevent="logout()">
                                            <i class="icon-feather-log-out"></i> Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- User icons -->
                        <a href="#" class="uil-user icon-small uk-hidden@s" uk-toggle="target: .header-widget ; cls: is-active"></a>
                    </div>
                    <!-- End Right Side Content / End -->
                </nav>
            </div>
        </header> 
	</section>
</template>
<script type="text/javascript">
	export default {
		name : 'Header',
        methods: {
            logout() {
                this.$swal({
                    title: 'Anda yakin?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true
                })
                .then(out => {
                    if(out) {
                        this.$store.dispatch('auth/logout')
                        .then(() => {
                            this.$swal.close()
                            this.$router.replace('/login')
                        })
                    }
                    else {
                        this.$swal.close()
                    }
                })
            }
        }
	}
</script>