import "bulma/css/bulma.css"
import { useState, useEffect } from "react"
import { getProductByID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    
    useEffect(() => {
        getProductByID(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
