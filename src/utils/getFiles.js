import fs from 'fs'
import path from 'path'

const root = process.cwd()

const getFiles = () => fs.readdirSync(path.join(root, 'src', 'blogs'))

export default getFiles
