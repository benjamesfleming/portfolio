export const projects = ["ballance-school", "gotasks"]

export default () => {
    const asyncImport = async slug =>
        (await import(`~/content/projects/${slug}.md`)).default

    return Promise.all(projects.map(asyncImport))
}
