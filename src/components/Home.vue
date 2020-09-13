<template>
	<section>
		<!-- Wrapper -->
    <div id="wrapper" class="bg-white">
        <!-- Header Container ================================================= -->
        <header class="header header-horizontal">
            <div class="container">
                <nav class="navbar navbar-expand-lg  static-top">

                    <!-- left Side Content -->
                     <div class="uk-navbar-left " >
                        <a href="home.html" class="logo" style="">
                            <img src="./../images/logo.png" alt="logo">
                        </a>
                    </div>
                    <nav>
                        <span class="logos">SMAN 5 BANDUNG</span>
                    </nav>
                    <!--  Right Side Content   -->
                    <div class="uk-navbar-right">
                        <a href="siswa/login.html" class="btn btn-success ">
                            LOGIN
                        </a>
                    </div>
                    <!-- End Right Side Content / End -->
                </nav>

            </div>
            <!-- container  / End -->
        </header>
        <div class="page-content">
            <div class="home-hero uk-img" style="background: green; width: 100%; max-height: 300px"   uk-img >
                <div class="uk-width-1-1">
                    <div class="page-content-inner uk-position-z-index tet text-white" >
                        <h2 class="text-white">E-Learning SMAN 5 BANDUNG</h2> <br>
                        <h4 class="my-lg-4 text-white"> Mengembangkan potensi kecerdasan intelektual, emosional, dan spiritual
                        </h4>
                    </div>
                </div>
            </div>
            <!-- Content================================================== -->
            <div class="section">
                <div class="page-content-inner">
                    <div class="section-small text-md-left text-center">
                        <div class="uk-child-width-1-2@m uk-gird-large uk-flex-middle uk-grid">
                            <div>
                                <img src="./../images/feature.png" alt="">
                            </div>
                            <div>
                                <h2>Belajar Lebih Mudah </h2> <br> <h1> Dimana saja dan kapan Saja</h1>
                                    <p> Raih Prestasi dan Cita Cita Setinggi Mungkin </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- footer ================================================== -->
    <div class="footer">
                <div class="container">
                    <hr>
                    <div class="uk-grid-collapse uk-grid" >
                        <div class="uk-width-expand@s uk-first-column">
                            <p>© 2020 <strong>SMAN 5 BANDUNG</strong>. All Rights Reserved. </p>
                        </div>
                    </div>
                </div>
            </div>

    </div>


	</section>
</template>

<script type="text/javascript">
	export default {
		name : 'Home'
	}

</script>


<style type="text/css" scoped>
	.home-hero{
		background: green;
		width: 100%; 
		max-height: 300px;  
	}

</style>