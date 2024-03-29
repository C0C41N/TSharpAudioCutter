import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { useStates } from '@services'
import { fs, openFolder } from '@services/native'
import { Long, outPath, Short } from '@services/split'
import { sleep } from '@services/util'
import { ytOutPath } from '@services/ytdl'
import { btn, mont_600_17 } from '@styles'
import { Level, Lic, Status, TraFile } from '@types'

const BtnDone = styled(btn)`
	${mont_600_17}
`

function split(props: any) {
	const { Files, License, Modal, FromYT } = useStates()

	const { val: files, set: setFiles, ref: refFiles } = Files({ ref: true })
	const { set: setModal } = Modal({ reactive: false })
	const { val: lic } = License()
	const { val: fromYT, set: setFromYT } = FromYT()

	const { replace } = useHistory()

	const { rmSync } = fs

	const [inprogress, setInprogress] = useState(false)

	const setStatus = (file: TraFile, status: Status) => {
		const { id } = file
		const fiLe: TraFile = { ...file, status }
		setFiles({ ...refFiles.current, [id]: fiLe })
	}

	const scrollIntoView = (file: TraFile) =>
		file.ref.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
		})

	const showModal = () =>
		setModal({
			show: true,
			loading: false,
			level: Level.info,
			desc: 'Done! You can find your files at',
			subDesc: 'Documents/TSharp_split',
		})

	const clearFiles = () => setFiles({})

	const doSplit = (file: string) => (lic === Lic.dev ? Long(file) : Short(file))

	const checkFromYT = async () => {
		if (!fromYT) return
		setFromYT(false)
		rmSync(await ytOutPath, { recursive: true, force: true })
		replace('/main/youtube')
	}

	const split = async () => {
		setInprogress(true)

		for (const file of Object.values(files)) {
			setStatus(file, Status.split)
			scrollIntoView(file)
			await doSplit(file.path).toPromise()
			setStatus(file, Status.done)
		}

		await sleep(300)

		clearFiles()
		showModal()
		await checkFromYT() // came from YT page ? redirect back
		openFolder(await outPath)

		setInprogress(false)
	}

	if (lic === Lic.null) return null
	if (!Object.keys(files).length) return null

	return !inprogress ? (
		<BtnDone {...props} onClick={split}>
			Split
		</BtnDone>
	) : null
}

export default split
