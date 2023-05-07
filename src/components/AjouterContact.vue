<template>
  <div>

    <h2>Ajouter un contact</h2>

    <div class="row">
      <form class="col s12" >
        <div class="row">
          <div class="input-field col s6">
            <input id="nom" type="text" class="validate" v-model="personne.nom">
            <label for="nom">Nom</label>
          </div>
          <div class="input-field col s6">
            <input id="prenom" type="text" class="validate" v-model="personne.prenom">
            <label for="prenom">Prénom</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="adresse" class="materialize-textarea" v-model="personne.adresse"></textarea>
            <label for="adresse">Adresse</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="telephone" type="text" class="validate" v-model="personne.telephone">
            <label for="telephone">Téléphone</label>
          </div>
          <div class="input-field col s6">
            <input id="email" type="email" class="validate" v-model="personne.email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button class="btn waves-effect waves-light" type="submit" name="action" @click="ajoutContact()">Ajouter
              <i class="material-icons right">send</i>

            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";

const personne=ref({
  nom:"",
  prenom:"",
  adresse:"",
  telephone:"",
  email:"",
  favoris:false
})

const {adresses}=defineProps(['adresses'])
const listeContacts=ref(adresses)
const ajoutContact=()=>{
  listeContacts.value.push(personne.value)
  personne.value={
    nom:"",
    prenom:"",
    adresse:"",
    telephone:"",
    email:"",
    favoris:false }

}
</script>

<style  scoped>

</style>