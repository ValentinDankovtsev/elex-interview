<template>
    <div class="notes__main-wrapper">
        <h1>Заметки</h1>
        <div class="notes__block">
            <div class="notes__form">
                <label for="header">Заголовок</label>
                <input type="text" id="header" v-model="note.title">
                <label for="text">Описание</label>
                <textarea id="text" v-model="note.content">
                </textarea>
                <VButton class="notes__form-button" @click="addNote">Добавить</VButton>
            </div>

            <div v-if="notes.length" class="notes__items">
                <transition-group name="list">
                    <div class="notes__item list-item" v-for="(note, index) in notes" :key="note.id">
                        <p class="notes__item-header">{{ note.title }}</p>
                        <p class="notes__item-description">{{ note.content }}</p>
                        <div class="notes__item-buttons">
                            <VButton class="notes__open-button" @click="$router.push(`/notes/${note.id}`)">Открыть
                            </VButton>
                            <VButton class="notes__remove-button" @click="removeNote(index)">Удалить</VButton>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div v-else class="notes__empty">Добавьте заметки!</div>
        </div>
    </div>
</template>

<script>

import { useNotes } from "./hooks/useNotes";
import VButton from "./UI/VButton";

export default {
    name: 'MainPage',
    components: {
        VButton
    },
    setup() {
        const { note, notes, addNote, removeNote } = useNotes();
        return {
            note, notes, addNote, removeNote,
        }
    }

}
</script>

<style>
* {
    font-family: system-ui;
    margin: 0;
    padding: 0;
}

.notes__main-wrapper {
    max-width: 1440px;
    margin: 40px auto;
    padding: 20px;
}

label {
    display: block;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
}


input {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
}

label[for="text"] {
    margin-top: 10px;
}

textarea {
    width: 100%;
    height: 70px;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
    resize: none;
    font-size: 16px;
    box-sizing: border-box;
    padding: 10px;

}


.notes__block {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 30px;
}

@media (max-width: 600px) {
    .notes__block {
        grid-template-columns: auto;
    }
}

.notes__form {
    margin-top: 20px;
}

.notes__form-button {
    margin-top: 20px;
    width: 100px;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    opacity: 0.9;
}


.notes__open-button {
    margin-top: 20px;
    width: 100px;
    color: #fff;
    color: #0d6efd;
    border-color: #0d6efd;
    background: transparent;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid #0d6efd;
    ;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    opacity: 0.9;
}

.notes__remove-button {
    margin-top: 20px;
    width: 100px;
    color: #fff;
    color: #fd0d19;
    border-color: #fd0d19;
    background: transparent;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid #fd0d19;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    opacity: 0.9;
}

.notes__form-button:hover {
    transition: 0.5s;
    opacity: 1;
}

.notes__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 16px;
    justify-content: flex-start;
}

@media (max-width: 600px) {
    .notes__items {
        margin: 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
    }

}

.notes__item {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
    padding: 0.5rem;
    padding: 1.5rem
}

.notes__item-header {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.notes__item-description {
    margin-top: 1rem;
    font-size: 16px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
    white-space: pre-line;
    line-height: 22px;
}

.notes__item-buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}

.notes__empty {
    color: #1b278d;
    font-size: 1.5rem;
}

.list-item {
    min-height: 210px;
    position: relative;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
