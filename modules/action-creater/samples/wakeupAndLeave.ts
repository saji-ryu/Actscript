import Human from '../src/Human'
const saji = new Human('saji')
const main = async () => {
  // await saji.wakeup(new Date())
  // await console.log('wakeup finish')
  // await saji.goto({ lat: 35.388705699999996, lon: 139.4269603 })
  // await console.log('goto finish')
  await saji.leave({ lat: 35.608678, lon: 139.688329 })
  await console.log('leave finish')

  await process.exit(1)
}

main()
