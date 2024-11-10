<template>
    <header>
        <div>
            <b-navbar class="header-st" toggleable="lg" type="dark">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                       <li class="nav-item"><router-link class=" nav-link" to="/">Home</router-link></li> 
                       <li class="nav-item"><router-link class=" nav-link" to="/posts">Post</router-link></li>
                       <li class="nav-item"> <router-link class="  nav-link" to="/users">User</router-link></li>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style>
.header-st {
    background-color: rgb(183, 180, 180) !important;
}
.router-link-active{
    color: black !important;
    border-bottom: 2px solid black !important;
}
</style>