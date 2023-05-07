<template>
  <div>
    <div class="row">
      <div class="col m6">
      <form >
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">search</i>
            <textarea id="icon_prefix2" class="materialize-textarea" v-model="search"></textarea>
            <label for="icon_prefix2">Rechercher un contact</label>
          </div>
        </div>
      </form>
      </div>
    </div>
    <div class="row z">
      <label>
        <input type="checkbox" @click="afficheFavorite()"/>
        <span>{{ favori ? "Tout":"Favoris" }}</span>
    </label>
    </div>
  <div class="row" >
    <div class="liste"><un-contact v-for="(contact,i) in listeContacts" :contact="contact" :key="i"  :listeFavoris="listeFavoris"/></div>
  </div>
  </div>
</template>

<script setup >
import {ref, watch} from "vue";
import UnContact from "@/components/UnContact.vue";

const {adresses}=defineProps(['adresses'])
const listeContacts=ref(adresses)
const search=ref("")
watch(search,(newValue)=>{

  if(newValue.length!==0)
  {
    listeContacts.value=listeContacts.value.filter((contact)=>contact.nom.toLowerCase().includes(newValue.toLowerCase()) || contact.prenom.toLowerCase().includes(newValue.toLowerCase()))
  }
  else{
    listeContacts.value=adresses
  }
})
const favori=ref(false)
const afficheFavorite=()=>{
  if(favori.value)
  {
    listeContacts.value=adresses
    favori.value=false
  }
  else{
    listeContacts.value=listeFavoris.value
    favori.value=true
  }
}
const listeFavoris=ref([])


</script>

<style scoped>
.liste{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>