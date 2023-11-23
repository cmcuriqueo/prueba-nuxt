
<style>
@import url("~/assets/css/new-header.css");
</style>

<template>
    <header class="issys-header">
        <div class="notificacion-invasiva-box cabecera-hide" id="notificacion-popup"></div>
        <div class="cabecera-header">
            <div class="cabecera-identificador">
                <a href='/MenuIntranet/' class="logo-conenedor" target='_blank' >
                    <img  class="cabecera-logo"
                        id="logo-issys"
                        src="/img/ISSyS-logo.png"
                        alt="logo-issys"
                        width="76"
                        height="53"
                    />
                </a>
                <div>
                    <h2 class="cabecera-titulo">Sistema de Tramites</h2>
                    <p class='cabecera-subtitulo'>Secretaria General - ISSyS</p>
                </div>
            </div>
            <button class="cabecera-user-icon" onclick="notificacionesUsr.mostrarNotificaciones()" disabled>
                <p id="cabecera-usuario">cmcuriqueo</p>
                <svg style="padding-bottom: 0.4em; padding-top: 0.4em" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span id="numero-notificaciones" class="cabecera-notif cabecera-hide">0</span>
            </button>
            <ul id='notificacion-box' class="cabecera-hide"></ul>
            <div id="back">
                <div class="circle small"></div><div class="circle mid"></div><div class="circle line "></div><div class="circle big"></div>
            </div>
        </div>
    </header>
</template>