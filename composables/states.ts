import { Note } from '../types/index'

export const useNotes = () =>
	useState<Note[]>('notes', () => [
		{
			id: 'V1StGXR8_Z5jdHi6B-myT',
			text: 'Note 1'
		},
		{
			id: 'V1StGXR8jdHi6B-myT',
			text: 'Car'
		},
		{
			id: 'tGXR8_Z5jdHi6B-myT',
			text: 'Note 3'
		},
		{
			id: 'V1StGXR8_Z6B-myT',
			text: 'Note 4'
		},
		{
			id: 'V1StGXR8_Z5jdHi6BT',
			text: 'Note 5'
		},
		{
			id: 'V1-myT',
			text: 'Note 6'
		}
	])
