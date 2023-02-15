<script setup lang="ts">
	import { ref, provide } from 'vue'
	import { Icon } from '@iconify/vue'
	import { nanoid } from 'nanoid'
	import { createStorage } from 'unstorage'

	const storage = createStorage()
	await storage.setItem('test:foo', { hello: 'world' })

	const edit = ref(false)

	const notes = useNotes()

	provide('notes', notes)

	function addNewNote() {
		notes.value.push({
			id: nanoid(),
			text: ''
		})
	}
</script>

<template>
	<div class="grid p-4 container">
		<button
			class="justify-self-end flex bg-yellow-400 items-center right-4 top-4 py-2 px-4 text-warm-gray-800 pointer"
			@click="addNewNote"
		>
			<Icon icon="ic:round-plus" /> Add Note
		</button>

		<div class="mygrid p-4">
			<template v-for="note in notes">
				<Note :id="note.id" />
			</template>
		</div>
	</div>
</template>
