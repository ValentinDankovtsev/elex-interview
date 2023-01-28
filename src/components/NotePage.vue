<template>
    <div class="detail-page notes__main-wrapper">
        <div class="detail-page-bread">
            <router-link class="detail-page__home-link" to="/">Главная</router-link>
            <span class="detail-page__home-link-text"> / {{ sanitizedContent.title }}</span>
        </div>

        <div class="detail-page-content">
            <h1>{{ sanitizedContent.title }}</h1>
            <p class="detail-page-description">{{ sanitizedContent.content }}</p>
        </div>
    </div>
</template>

<script>
import { useNotes } from "./hooks/useNotes";
import { computed } from "vue";
import { useRoute } from 'vue-router'

export default {
    name: 'NotePage',
    components: {
    },

    setup() {
        const { notes } = useNotes();
        const route = useRoute();
        return {
            sanitizedContent: computed(() => notes.value.find(el => String(el.id) == String(route.params.id))),
        }
    },


}


</script>

<style>
.detail-page__home-link {
    color: #0d6efd;
}

.detail-page__home-link-text {
    color: #808080;
}

.detail-page-content {
    margin-top: 20px;
}

.detail-page-description {
    margin-top: 30px;
    white-space: pre-line;
    line-height: 23px;
}
</style>
