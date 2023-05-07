<script setup>
import ARenommer from './components/MesAdresses.vue'
import MesAdresses from "@/components/MesAdresses.vue";
import MenuContact from "@/components/Menu-Contact.vue";

// si vous voulez utilisez pinia , il faut placer ces deux lignes dans le composant de votre choix.
//import { useDefaultStore } from './stores/index'
//const store = useDefaultStore()
</script>

<template>
  <menu-contact/>
  <main>
    <router-view/>
  </main>
</template>

<style>

</style>
