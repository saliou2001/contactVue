<template>
  <div class="container">
  <h2>Mes adresses</h2>
    <div class="row">
      <div class="col s12" id="listeContact">

      <listes-contacts :adresses="adresses" />
        <div class="row" ><a class="btn-floating halfway-fab waves-effect waves-light red" style="margin-bottom: 12px;" @click="showAddContact =!showAddContact" ><i class="material-icons ajout">add</i></a></div>
      </div>
    </div>
    <transition >
    <div class="row container" v-if="showAddContact" >
      <ajouter-contact :adresses="adresses" />
    </div>
    </transition>

  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import ListesContacts from "@/components/ListesContacts.vue";
import AjouterContact from "@/components/AjouterContact.vue";
const showAddContact=ref(false)
const adresses = ref([])
const ajoutListeContact=(personne)=>{
  adresses.value.push(personne)
  personne.nom=""
  personne.prenom=""
  personne.adresse=""
  personne.telephone=""
  personne.email=""
  personne.favoris=false
}

adresses.value.push({
  nom:"Doe",
  prenom:"John",
  adresse:"1 rue de la paix",
  telephone:"0606060606",
  email:"saliou@gmail.com",
  favoris:false,})

adresses.value.push({
  nom:"Doe",
  prenom:"Jane",
  adresse:"1 rue de la paix",
  telephone:"0606060606",
  email:"test@test.fr",
  favoris:false,

})
</script>

<style>
#listeContact{
  position: relative;
  margin-top: 2rem;
}
.ajout{
  position: absolute;

  font-size: 2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>