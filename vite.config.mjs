import { resolve } from 'node:path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        rentals: resolve(process.cwd(), 'rent.html'),
        myRentals: resolve(process.cwd(), 'my-rentals.html'),
      },
    },
  },
}
