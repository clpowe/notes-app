<script setup lang="ts">
	import { computed } from 'vue'
	import { QuillEditor } from '@vueup/vue-quill'
	import '@vueup/vue-quill/dist/vue-quill.bubble.css'

	import { Icon } from '@iconify/vue'

	const props = defineProps({
		id: String
	})

	const notes = useNotes()

	const note = computed(() => {
		return notes.value.find((el) => el.id === props.id)
	})

	function deleteNote() {
		notes.value = notes.value.filter((el) => el.id != props.id)
	}
</script>

<template>
	<div class="note bg-white drop-shadow h-[400px] max-w-[60ch] overflow-hidden">
		<div
			class="flex items-center flex-end tools bg-blue-800 justify-end p-4 gap-2"
		>
			<button class="flex items-center text-white" @click="deleteNote">
				<Icon icon="ic:baseline-delete-forever" /> delete
			</button>
		</div>

		<div class="h-full overflow-hidden" v-if="note">
			<ClientOnly>
				<QuillEditor
					contentType="text"
					v-model:content="note.text"
					theme="bubble"
					toolbar="minimal"
					class="h-full"
				></QuillEditor>
			</ClientOnly>
		</div>
	</div>
</template>
