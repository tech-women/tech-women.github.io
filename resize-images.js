const fs = require('fs').promises
const glob = require('glob')
const path = require('path')
const gm = require('gm')
const chalk = require('chalk')

// This sets the width of the thumbnails that will be create (if the image is smaller)
const sizes = [250, 500, 1000]

const im = gm.subClass({ imageMagick: true })
const images = glob.sync(
  path.join(process.cwd(), 'assets', '**', '*.{jpg,jpeg,png}')
)

const thumbNameRx = new RegExp(
  `\\.(${sizes.map(s => `${s}`).join('|')})\\.(jpg|jpeg|png)$`
)
console.log(thumbNameRx)

images
  .filter(name => !thumbNameRx.test(name))
  .forEach(async imageFile => {
    const localizedFile = imageFile.replace(process.cwd() + path.sep, '')
    const image = im(await fs.readFile(imageFile))
    image.size((err, geometry) => {
      if (err) {
        console.error(chalk.red(err))
        return
      }
      const { width } = geometry
      if (!width) {
        console.error(chalk.error(`${localizedFile} has no width!`))
        return
      }
      sizes.forEach(async size => {
        const { dir, name, ext } = path.parse(imageFile)
        const thumbnailFile = `${dir}${path.sep}${name}.${size}${ext}`
        if (width <= size) {
          console.log(
            chalk.grey(
              `[${size}] ${localizedFile} size ${width} is smaller or equal`
            )
          )
          fs.copyFile(imageFile, thumbnailFile)
          return
        }
        try {
          await fs.stat(thumbnailFile)
          console.log(
            chalk.cyan(`[${size}] thumbnail for ${localizedFile} exists`)
          )
        } catch (_) {
          image.identify((err, ident) => {
            if (err) {
              console.error(chalk.red(err))
              return
            }
            image
              .resize(size, `${size}>`)
              .gravity('Center')
              .noProfile()
              .strip()
              .toBuffer(ident.format, async (err, buffer) => {
                if (err) {
                  console.error(chalk.red(err))
                  return
                }
                await fs.writeFile(thumbnailFile, buffer)
                console.log(
                  chalk.green(
                    `[${size}] thumbnail for ${localizedFile} created`
                  )
                )
              })
          })
        }
      })
    })
  })

console.log(images)
