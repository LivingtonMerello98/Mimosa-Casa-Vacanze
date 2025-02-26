<script>
import AppForm from '../components/contacts-page-componets/AppForm.vue';
import AppMaps from '../components/contacts-page-componets/AppMaps.vue';
import HeaderAboutContacts from '../components/HeaderAboutContacts.vue';
import AppUniversalHeader from '../components/AppUniversalHeader.vue';

export default {
    name: "AppContacts",
    components: {
        AppForm,
        AppMaps,
        HeaderAboutContacts,
        AppUniversalHeader

    }
}
</script>

<template>
    <AppUniversalHeader />
    <HeaderAboutContacts />
    <AppMaps></AppMaps>
    <AppForm></AppForm>
</template>

<style></style>