export function render(components) {
  return components.reduce((prev, component) => {
    return `
          ${prev}
          ${component.render()}
        `
  }, ``)
}
