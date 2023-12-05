import Link from 'next/link'
import classes from './index.module.scss'

const Categories = () => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
        <div className={classes.list}>
            
        </div>
      </div>
    </section>
  )
}

export default Categories
