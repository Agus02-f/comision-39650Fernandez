import styles from "./ItemList.module.css"

const ItemList = ({ saludo }) => {

  // let { saludo } = props

  return (
    <div className={styles.containerItemList}>
      <h1>{saludo}</h1>
    </div>
  )
}

export default ItemList