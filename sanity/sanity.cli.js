import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // Set projectId
    projectId: '',
    dataset: 'production'
  }
})
