const { defineConfig } = require('@yarnpkg/types')

module.exports = defineConfig({
  async constraints({ Yarn }) {
    for (const workspace of Yarn.workspaces()) {
      if (workspace.ident.startsWith(`@libraries/shared`)) {
        for (const dependency of workspace.pkg.dependencies.keys()) {
          if (['mui'].some((forbiddenDependency) => dependency.includes(forbiddenDependency))) {
            workspace.error(`Dependency on ${dependency} is not allowed on shared libraries`)
          }
        }
      }
    }
  },
})
